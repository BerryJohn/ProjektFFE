import React, { FC } from 'react';
import styled from 'styled-components';

import arrowDown from '../../../icons/arrow-down.svg'

import { Colors } from '../../../styledHelpers/Colors';

const MenuButton = styled.button`
    background-color: transparent;
    border:none;
    outline: none;
`;

const ImageSelector = styled.img`
    margin-left:16px;
`;

const Selector = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const PageName = styled.div`
    width:150px;
    color: ${Colors.darkBlue};
    font-size:18px;
    text-align:left;
`;

export const ExpandMenuButton: FC = () => {
    return(
        <MenuButton>
            <Selector>
                <ImageSelector src="./icons/house2.svg" alt="Current page image"/>
                <PageName>Home</PageName>
                <img src={arrowDown} alt=""/>
            </Selector>
        </MenuButton>
    );
};

export default ExpandMenuButton;