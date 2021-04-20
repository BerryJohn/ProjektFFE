import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors'
import useDropdown from 'react-dropdown-hook';
import { Link } from 'react-router-dom';

import logo from '../../../icons/gorillaLogo.png';
import commentsImg from '../../../icons/comments.svg';
import bellImg from '../../../icons/bell.svg';

import { SearchBar } from '../TopBar/SearchBar';

import { RoundButton } from './Buttons/RoundButton';
import { HouseButton } from './Buttons/HouseButton';

import { ExpandMenuButton } from './ExpandMenu/ExpandMenuButton';
import { ExpandedMenu } from './ExpandMenu/ExpandedMenu';



const Bar = styled.div`
    width:100vw;
    min-height:50px;
    max-height:50px;
    background-color: ${Colors.white};
    display:flex;
    align-items:center;
    justify-content: space-between;
    box-shadow: 1px 0px 4px ${Colors.lightGray};
    position:sticky;
`;

const RightButtonSet = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right: 10px;
`;
const LeftButtonSet = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 10px;
`;

const Logo = styled.div`
    width:35px;
    height:35px;
`;

const LogoImage = styled.img`
    width:35px;
    height:35px;  
`;

const MenuHookButton = styled.button`
    background-color: transparent;
    border:none;
    outline:none;
`;

const Menu = styled.div`
    position:relative;
`;

export const TopBar: FC = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    
    const menuHandler = () => {
        toggleDropdown();
    };
    const closeDropMenu = () => {
        closeDropdown();
    }
    
    return(
        <Bar>
            <LeftButtonSet>
                <Link to='/'>
                    <Logo>
                        <LogoImage src={logo} />
                    </Logo>
                </Link>
                <Menu ref={wrapperRef}>
                    <MenuHookButton onClick={menuHandler}>
                        <ExpandMenuButton />
                    </MenuHookButton>
                    {dropdownOpen && <ExpandedMenu closeMenu={closeDropMenu}/>}
                </Menu>
            </LeftButtonSet>
            <SearchBar />
            <RightButtonSet>
                <HouseButton />
                <RoundButton image={commentsImg} altText="Check your comments!"/>
                <RoundButton image={bellImg} altText="Check your notifications!"/>
            </RightButtonSet>
        </Bar>
    );
};

export default TopBar;