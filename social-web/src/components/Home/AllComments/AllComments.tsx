import {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { IComment } from '../../../entities/comments';
import { IState } from '../../../reducers';
import { ICommentReducer } from '../../../reducers/commentReducer';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IUsersReducer } from '../../../reducers/userReducers';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import SingleComment from './SingleComment';

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

export const AllComments: FC = () =>{

    const [currentPage, setCurrentPage] = useState<number>(0);

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comments
    }));

    const pages: any[] = [];
    for(let i = 0; i < commentList.length; i += 10)
    {
        pages.push(commentList.slice(i,i+10)); 
    }
    const pageCount:number = pages?.length - 1;

    return(
        <>
            <Title>Resume your work</Title>
            {pages[currentPage]?.map( (e:IComment,index:number) => 
                (<SingleComment text={e.body} title={e.name} postId={e.postId} key={index}/>)
            )}

            <PageSelector>
                <CustomButton onClick={
                    () => currentPage > 0 
                        ? setCurrentPage(currentPage - 1) 
                        : setCurrentPage(currentPage)
                }>Previus</CustomButton>

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

export default AllComments;