import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photoReducers';
import { IUsersReducer } from '../../reducers/userReducers';
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
    min-height:200px;
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
    top:70px;
`;
const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;


export const Profile: FC = () =>{

    const { currentUser, photoList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));


    const [isEdit, isEditHandler] = useState(false);
    const handleSubmit = () => { isEditHandler(!isEdit) }   

    return(
        <Wrapper>
            <AboutUser  name={currentUser?.name}
                        userName={currentUser?.username}
                        email={currentUser?.email}
                        city={currentUser?.address?.city}
                        phone={currentUser?.phone}
                        companyName={currentUser?.company.name}
                        avatar={photoList?.filter(el => el?.id === currentUser?.id)[0]?.url}
                        />
            <EditButton onClick={() => handleSubmit()}><ButtonImg src={pen}/></EditButton>
            <Categories />
            <JobInfo isEditable={isEdit}/>
            <Proposals/>
            <IntReviews/>
            <Fees />
        </Wrapper>
    );
};

export default Profile;