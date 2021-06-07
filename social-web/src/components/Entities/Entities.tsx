import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import EntitiesContainer from './EntitiesContainer/EntitiesContainer';
import gear from '../../icons/gear.svg';
import SearchBar from '../Common/TopBar/SearchBar';
import ButtonPanel from './ButtonPanel';
import DisplayMenu from './DisplayMenu';
import Filters from './Filters';


const Containter = styled.div`
    width:1000px;
    /* width:calc(100vw - 50px); */
    background-color:${Colors.white};
    padding:10px 10px;
    position: relative;
`;

const Menu = styled.div`
    width:100%;
    height:80px;
`;

const UpMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:50px;
`;

const Title = styled.div`
    font-weight:bold;
    color:${Colors.darkBlue};
    margin-left:10px;
`;

const TitleImg = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
`;

const DownMenu = styled.div`
    display:flex;
    height:30px;
    align-items:center;
    justify-content:space-between;
`;

const SearchWrapper = styled.div`
    width:150px;
    height:25px;
    display:flex;
    align-items:center;
`;

const CustomSelect = styled.select`
    height:30px;
    width:80px;
    outline:none;
    border:1px solid ${Colors.white};
`;

const RightPanel = styled.div`
    display:flex;
    align-items:center;
`;

const Wall = styled.div`
    height:25px;
    width:1px;
    background-color: ${Colors.lightGray};
    margin:0px 20px;
`;

export const Entities: FC = () =>{

    const [inputText, setInputText] = useState<string>('');
    const [displayStyle, setDisplayStyle] = useState<boolean>(true);
    const [sortAlphabetic, setSortAlphabetic] = useState<boolean>(true);
    const [displaySortMenu, setDisplaySortMenu] = useState<boolean>(false);
    const [displayOption, setDisplayOption] = useState<string>('All');

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText((e.target.value as string).trim().toLocaleLowerCase());
    };
    const displayStyleHanlder = () => setDisplayStyle(!displayStyle);
    const sortHanlder = () => setSortAlphabetic(!sortAlphabetic);
    const filterDisplayHandler = () => setDisplaySortMenu(!displaySortMenu);

    return(
        <Containter>
            <Menu>
                <UpMenu>
                    <Title>
                        Entities
                        <TitleImg src={gear}/>
                    </Title>
                    <DisplayMenu onClicked={displayStyleHanlder} mosaic={displayStyle} />
                    
                </UpMenu>
                <DownMenu>
                    <ButtonPanel onClickSort={sortHanlder} displayFilters={filterDisplayHandler}/>
                    {displaySortMenu && <Filters />}
                    <RightPanel>
                        <SearchWrapper>
                            <SearchBar searchHandler={inputChangeHandler}/>
                        </SearchWrapper>
                            <Wall />
                        <CustomSelect value={displayOption} onChange={(e) => setDisplayOption(`${e.target.value}`)}>
                            <option>All</option>
                            <option>Mine</option>
                        </CustomSelect>
                    </RightPanel>
                </DownMenu>
            </Menu>
            <EntitiesContainer displayOption={displayOption} sortAlphabetically={sortAlphabetic} isMosaic={displayStyle} filter={inputText}/>
        </Containter>
    );
};