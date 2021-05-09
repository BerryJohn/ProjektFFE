import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    height:15px;
    margin-right:20px;
    display:flex;
    cursor: pointer;
`;

const CustomImg = styled.img`
    width:12px;
    height:12px;
    margin-right:5px;
`;

const CustomText = styled.span`
    font-size: ${fontSize[16]};
    font-weight:600;
    color: ${Colors.blue};
`;

interface IUserFunction{
    icon:string;
    text:string;
}

export const UserFunction: FC<IUserFunction> = (props) =>{
    return(
        <Wrapper>
            <CustomImg src={props.icon} alt="Icon"/>
            <CustomText>{props.text}</CustomText>
        </Wrapper>
    );
};