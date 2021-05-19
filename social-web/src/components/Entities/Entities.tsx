import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';
import EntitiesContainer from './EntitiesContainer/EntitiesContainer';
import gear from '../../icons/gear.svg';
import sort from '../../icons/sort.svg';
import filter from '../../icons/filter.svg';
import resize from '../../icons/resize.svg';
import share from '../../icons/share.svg';
import SearchBar from '../Common/TopBar/SearchBar';




const Containter = styled.div`
    width:1000px;
    background-color:${Colors.white};
    padding:10px;
`;

const Menu = styled.div`
    width:100%;
    height:60px;
`;

const UpMenu = styled.div`
    display:flex;
    justify-content:space-between;
    height:30px;
    
`;

const Title = styled.div`
    font-weight:bold;
    color:${Colors.darkBlue};
`;

const TitleImg = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
`;

const DisplayFormat = styled.div``;
const Mosaic = styled.div``;
const Hamburger = styled.div``;

const CustomSelect = styled.select`
    height:30px;
    width:80px;
`;

const DownMenu = styled.div`
    display:flex;
    height:30px;
    align-items:center;
    justify-content:space-between;
`;

const ButtonPanel = styled.div`
    display:flex;
    align-items:center;
`;

const Options = styled.div`
    display:flex;
`;

const Option = styled.div`
    color:${Colors.gray};
    margin-left:10px;
    padding:2px 2px;
    border-left:1px solid ${Colors.gray};
`;

const SearchWrapper = styled.div`
    width:150px;
    height: 30px;
`;

export const Entities: FC = () =>{
    return(
        <Containter>
            <Menu>
                <UpMenu>
                    <Title>
                        Entities
                        <TitleImg src={gear}/>
                    </Title>
                    <DisplayFormat>
                        <Mosaic/><Hamburger />
                    </DisplayFormat>
                </UpMenu>
                <DownMenu>
                    <ButtonPanel>
                        <CustomSelect></CustomSelect>
                        <Options>
                            <Option>
                                <TitleImg src={sort}/>
                                Sort
                                <TitleImg src={filter}/>
                                Filters
                            </Option>
                            <Option><TitleImg src={resize}/></Option>
                            <Option><TitleImg src={share}/>Share</Option>
                        </Options>
                    </ButtonPanel>

                    <SearchWrapper>
                        <SearchBar/>  
                    </SearchWrapper>
                   
                </DownMenu>
            </Menu>
            <EntitiesContainer />
        </Containter>
    );
};