import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import Table from './Table';

const Wrapper = styled.div`
    width:1000px;
    padding:10px;
    box-sizing:border-box;
    border-bottom: 1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.blue};
    font-size:${fontSize[18]};
    margin-top:5px;
    margin-left:5px;
`;

interface IFees{
    isEditable: boolean;
}

export const Fees: FC<IFees> = (props) =>{
    return(
        <Wrapper>
            <Title>Amount of fees</Title>
            <Table isEditable={props?.isEditable}/>
        </Wrapper>
    );
};

export default Fees;