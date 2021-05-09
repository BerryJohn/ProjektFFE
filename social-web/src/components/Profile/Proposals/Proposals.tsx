import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import Table from '../Fees/Table';


const Wrapper = styled.div`
    width:1000px;
    padding:10px;
    box-sizing:border-box;
    border-bottom: 1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.darkBlue};
    margin-top:5px;
`;

export const Proposals: FC = () =>{
    return(
        <Wrapper>
            <Title>Proposals</Title>
            <Table />
        </Wrapper>
    );
};

export default Proposals;