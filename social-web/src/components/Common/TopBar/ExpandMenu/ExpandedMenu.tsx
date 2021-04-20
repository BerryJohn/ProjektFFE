import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';

import { SubMenuTitle } from '../../../../styledHelpers/Components';
import Links from './Links';

const MenuBody = styled.div`
    width:210px;
    height:auto;
    background-color:${Colors.white};
    position:absolute;
    right:0px;
    box-shadow: 1px 1px 2px ${Colors.lightGray};
    border:0px 1px 1px 1px solid ${Colors.lightGray};
    border-radius:3px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const InputFilter = styled.input`
    width:190px;
    height:20px;
    padding:3px 6px;
    outline:none;
    margin:3px 0px;
    border:1px solid ${Colors.lightGray};
`;

const Account = styled.div`
    width:100%;
    height:200px;
    border-top:1px solid ${Colors.lightGray};
`;

interface IExpMenu{
    closeMenu(): void;
}


export const ExpandedMenu: FC<IExpMenu> = props => {

    const closeDropMenu = () => {
        props.closeMenu();
    }

    return(
        <MenuBody>
            <InputFilter placeholder='Filter...'/>
            <Links closeDropdown={closeDropMenu}/>
            <Account>
                <SubMenuTitle>
                    Account
                </SubMenuTitle>
            </Account>
        </MenuBody>
    );
};

export default ExpandedMenu;