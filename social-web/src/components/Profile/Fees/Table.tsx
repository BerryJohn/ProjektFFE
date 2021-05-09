import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';


const Wrapper = styled.div`
    width:100%;
    height:200px;
`;

const Headers = styled.div`
    display:flex;
    /* justify-content:space-around; */
    border-bottom:1px solid black;
`;

const Header = styled.div`
    width: calc(1000px / 6);
    font-size: ${fontSize[20]};
    display:flex;
    justify-content:center;
`;

const Data = styled.div`
    display:flex;
    width:100%;
`;

const Column = styled.div`
    width: calc(1000px / 6);
    height:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
`;

const Row = styled.div`
    padding:2px 4px;
    font-size: ${fontSize[14]};
`;

export const Table: FC = () =>{
    return(
        <Wrapper>
            <Headers>
                <Header>Name</Header>
                <Header>Entity</Header>
                <Header>Location</Header>
                <Header>Expertise</Header>
                <Header>Date</Header>
                <Header>Firm</Header>
            </Headers>
            <Data>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
                <Column>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                    <Row>POLEK</Row>
                </Column>
            </Data>
        </Wrapper>
    );
};

export default Table;