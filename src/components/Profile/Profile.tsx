import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import AboutUser from './AboutUser/AboutUser';
import Categories from './Categories/Categories';
import Fees from './Fees/Fees';
import IntReviews from './IntReviews/IntReviews';
import JobInfo from './JobInfo/JobInfo';
import Proposals from './Proposals/Proposals';
import pen from '../../icons/pen.svg';

const Wrapper = styled.div`
    width:1000px;
    background-color:${Colors.white};
    position:relative;
`;

const EditButton = styled.button`
    width:30px;
    height:30px;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    cursor: pointer;
    right:15px;
    top:140px;
`;

const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;

export const Profile: FC = () =>{

    const [isEdit, isEditHandler] = useState(false);
    const handleSubmit = () => { isEditHandler(!isEdit) }   

    return(
        <Wrapper>
            <AboutUser />
            <EditButton onClick={() => handleSubmit()}><ButtonImg src={pen}/></EditButton>
            <Categories isEditable={isEdit}/>
            <JobInfo isEditable={isEdit}/>
            <Proposals isEditable={isEdit}/>
            <IntReviews isEditable={isEdit}/>
            <Fees isEditable={isEdit}/>
        </Wrapper>
    );
};

export default Profile;