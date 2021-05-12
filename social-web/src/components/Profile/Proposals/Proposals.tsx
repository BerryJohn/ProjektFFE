import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import Table from './Table';


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

interface IProposals{
    isEditable: boolean;
}

export const Proposals: FC<IProposals> = (props) =>{

    return(
        <Wrapper>
            <Title>Proposals</Title>
            <Table isEditable={props.isEditable}/>
        </Wrapper>
    );
};

export default Proposals;