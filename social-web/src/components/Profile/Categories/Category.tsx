import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

const Wrapper = styled.div`
    height:20px;
    background-color: #e6f0f3;
    color:#71abbb;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:2px 10px;
    border-radius:2px;
    margin-right:8px;
    margin-top:2px;
`;

interface ICategory{
    text: string;
}

export const Category: FC<ICategory> = (props) =>{
    return(
        <Wrapper>
            {props.text}
        </Wrapper>
    );
};

export default Category;