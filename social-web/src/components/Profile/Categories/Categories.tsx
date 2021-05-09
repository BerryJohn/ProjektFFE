import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import Category from './Category';

const Wrapper = styled.div`
    box-sizing:border-box;
    padding: 10px;
    width:100%;
    min-height:200px;
    background-color:${Colors.white};
    border-bottom:1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.gray};
    margin-top:10px;
    margin-bottom:5px;
`;

const CatContainter = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

export const Categories: FC = () =>{
    return(
        <Wrapper>
            <Title>Expertise</Title>
            <CatContainter>
                <Category text="POLEK TO MAŁY TROLEK SROLEK ITD DUPOLEK"/>
            </CatContainter>
            <Title>Specalities</Title>
            <CatContainter>
                <Category text="Fast harnaś drinking"/>
                <Category text="Over 9000$/h"/>
            </CatContainter>
            <Title>Admission to practise law</Title>
            <CatContainter>
                <Category text="Yes"/>
            </CatContainter>
            <Title>Countries</Title>
            <CatContainter>
                <Category text="POLSKA GUROM"/>
            </CatContainter>
        </Wrapper>
    );
};

export default Categories;