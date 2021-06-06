import {ChangeEvent, FC, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { IComment } from '../../../entities/comments';
import { IState } from '../../../reducers';
import { ICommentReducer } from '../../../reducers/commentReducer';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import SearchBar from '../../Common/TopBar/SearchBar';
import SingleComment from './SingleComment';
import FilterOption from './FilterOption';

const Title = styled.h1`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:15px 10px;
    width:1000px;
`;

const PageSelector = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:1000px;
`;

const PageButton = styled.button`
    outline:none;
    border:none;
    background-color:transparent;
    cursor: pointer;
    color: ${Colors.blue};
`;

const CurrentPageButton = styled(PageButton)`
    color:${Colors.black};
`;

const CustomButton = styled.button`
    outline:none;
    border:none;
    background-color:transparent;
    cursor: pointer;
    text-transform:uppercase;
    color: ${Colors.blue};
    transition: .2s;
    &:hover{
        box-shadow: 0px 0px 2px ${Colors.darkBlue};
        border-radius:2px;
    }
`;

const TitleBar = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:1000px;
`;

const Filter = styled.div`
    height:30px;
    width:200px;
`;

const CustomSelect = styled.select`
    margin-left:20px;
    height:30px;
    width:120px;
    font-size:${fontSize[16]};
    background-color:transparent;
    outline:none; 
    box-shadow: none;
    border:1px solid ${Colors.lightBackground};
`;

const FilterBar = styled.div`
    width:100%;
    height:30px;
    display:flex;
    justify-content:space-around;
    margin-bottom:5px;
`;

export const WorkspaceComments: FC = () =>{

    const [inputText, setInputText] = useState<string>('');
    const [displayOption, setDisplayOption] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState<number>(0);

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comments
    }));
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText((e.target.value as string).trim().toLocaleLowerCase());
    };

    const pages: any[] = [];
    const tempArr: any[] = commentList.filter(el => el.body.includes(inputText))
                                      .filter(el => displayOption == 'All' ? el : el.id < 15);

    for(let i = 0; i < tempArr.length; i += 10)
    {
        pages.push(tempArr.slice(i,i+10)); 
    }
    const pageCount:number = pages?.length - 1;

    return(
        <>
            <TitleBar>
                <Title>Resume your work</Title>
                <Filter><SearchBar searchHandler={inputChangeHandler}/></Filter>
                <CustomSelect value={displayOption} onChange={(e) => setDisplayOption(`${e.target.value}`)}>
                    <option>All</option>
                    <option>Followed</option>
                </CustomSelect>
                
            </TitleBar>
            <FilterBar>
                <FilterOption color='74, 180, 255' text='All'/>
                <FilterOption color='61, 219, 88' text='SAS'/>
                <FilterOption color='247, 87, 223' text='SARL'/>
                <FilterOption color='255, 167, 79' text='Secondary business'/>
                <FilterOption color='57, 171, 173' text='Communities'/>
                <FilterOption color='138, 57, 173' text='POA'/>
                <FilterOption color='242, 0, 109' text='Survey'/>
                <FilterOption color='69, 69, 69' text='...'/>
            </FilterBar>
            {pages[currentPage]?.map( (e:IComment,index:number) => 
                (<SingleComment text={e.body} title={e.name} postId={e.postId} key={index}/>)
            )}

            <PageSelector>
                <CustomButton onClick={
                    () => currentPage > 0 
                        ? setCurrentPage(currentPage - 1) 
                        : setCurrentPage(currentPage)
                }>Previous</CustomButton>

                { pageCount < 3 
                    ?   pages.map((el,index) => 
                        (<PageButton onClick={() => setCurrentPage(index)} key={index}>{index+1}</PageButton>))
                    :   (
                        <>
                            { currentPage > 0 &&
                            <>
                                <PageButton onClick={() => setCurrentPage(0)} key={0}>{1}</PageButton>
                                <>...</>
                            </>
                            }
                            { currentPage > 1 &&
                            <PageButton onClick={() => setCurrentPage(currentPage - 1)} key={currentPage - 1}>{currentPage}</PageButton>}
                            
                            <CurrentPageButton onClick={() => setCurrentPage(currentPage)} key={currentPage}>{currentPage + 1}</CurrentPageButton>
                            { currentPage < pageCount &&
                                <PageButton onClick={() => setCurrentPage(currentPage + 1)} key={currentPage + 1}>{currentPage + 2}</PageButton>}
                            
                            { currentPage < pageCount - 1 &&
                            <>  
                                <>...</>
                                <PageButton onClick={() => setCurrentPage(pageCount)} key={pageCount}>{pageCount + 1}</PageButton>
                            </>
                            }
                        </>
                        )
                }
                
                <CustomButton onClick={
                    () => currentPage < pageCount
                        ? setCurrentPage(currentPage + 1) 
                        : setCurrentPage(currentPage)
                }>Next</CustomButton>
                
            </PageSelector>
        </>
    );
}

export default WorkspaceComments;