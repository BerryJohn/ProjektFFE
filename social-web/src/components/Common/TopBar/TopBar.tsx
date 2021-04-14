import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors'
import useDropdown from 'react-dropdown-hook';
import { Link } from 'react-router-dom';

import logo from '../../../icons/gorillaLogo.png';

import { SearchBar } from '../TopBar/SearchBar';
import { NotifyButtonComments } from './Buttons/NotifyButtonComments';
import { NotifyButtonBell } from './Buttons/NotifyButtonBell';
import { HouseButton } from './Buttons/HouseButton';
import { ExpandMenuButton } from './ExpandMenuButton';
import { ExpandedMenu } from './ExpandedMenu';

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
                    {dropdownOpen &&
                        <ExpandedMenu />
                    }
                </Menu>

            </LeftButtonSet>
            <SearchBar />
            <RightButtonSet>
                <HouseButton />
                <NotifyButtonComments />
                <NotifyButtonBell />
            </RightButtonSet>
        </Bar>
    );
};

export default TopBar;