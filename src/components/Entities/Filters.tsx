import React, {FC, useState} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import close from '../../icons/close.svg'
import arrow from '../../icons/arrow_down_black.svg';
import arrowBlue from '../../icons/arrow_down.svg';

const Wrapper = styled.div`
    width:550px;
    height:140px;
    background-color:${Colors.white};
    box-shadow:0px 1px 3px ${Colors.lightGray};
    position: absolute;
    top:100px;
    left:200px;
    border-radius:2px;
    padding:10px 15px;  
`;

const Text = styled.div`
    font-size:${fontSize[12]};
    color:${Colors.gray};
`;

const Filter = styled.div`
    height:25px;
    width:100%;
    font-size:${fontSize[14]};
    display:flex;
    align-items:center;
    margin:10px 0px 0px 15px;
`;

const FilterInput = styled.input`
    border:none;
    background-color:${Colors.lightGray};
    outline:none;
    height:23px;
    width:100px;
    border-radius:4px;
    margin-left:15px;
    color:${Colors.gray};
    &::placeholder{
        color:${Colors.gray};
    }
`;
const FilterImg = styled.img`
    width:15px;
    height:15px;
    margin-right:10px;
    cursor: pointer;
`;

const FakeSelect = styled.div`
    cursor:pointer;
    margin-left:15px;
`;

const SmallIcon = styled.img`
    height:9px;
    width:9px;
    margin-left:3px;
`;

const Type = styled.span`
    width:45px;
`;

const AddFilters = styled.div`
    font-size:${fontSize[14]};
    color:${Colors.blue};
    display:flex;
    height:35px;
    align-items:center;
`;

const FakeSelectBlue = styled(FakeSelect)`
    height:auto;
`;

const BigPlus = styled.span`
    font-size:30px;
    margin-right:5px;
    cursor: pointer;
`;

export const Filters: FC = (props) => {

    return(
        <Wrapper>
            <Text>Rows are filtered by the following conditions starting from the top.</Text>
            <Filter>
                <FilterImg src={close}/>
                <Type>Where</Type>
                <FakeSelect>Company <SmallIcon src={arrow}/></FakeSelect> 
                <FakeSelect>Contains <SmallIcon src={arrow}/></FakeSelect> 
                <FilterInput placeholder='Type...'/>
            </Filter>
            <Filter>
                <FilterImg src={close}/>
                <Type>Where</Type>
                <FakeSelect>Status <SmallIcon src={arrow}/></FakeSelect> 
                <FakeSelect>Is <SmallIcon src={arrow}/></FakeSelect> 
                <FilterInput placeholder='Type...'/>
                <FakeSelect>In <SmallIcon src={arrow}/></FakeSelect> 
                <FilterInput placeholder='Entity...'/>
            </Filter>
            <Filter>
                <FilterImg src={close}/>
                <Type>And</Type>
                <FakeSelect>Status <SmallIcon src={arrow}/></FakeSelect> 
                <FakeSelect>Ends before <SmallIcon src={arrow}/></FakeSelect> 
                <FilterInput placeholder='Date'/>
                <FakeSelect>In <SmallIcon src={arrow}/></FakeSelect> 
                <FilterInput placeholder='Entity...'/>
            </Filter>
            <AddFilters>
                <BigPlus>+</BigPlus> Add Filter <FakeSelectBlue>choose property <SmallIcon src={arrowBlue}/></FakeSelectBlue>
            </AddFilters>
        </Wrapper>
    );
}

export default Filters;