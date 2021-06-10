import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserFunction } from './UserFunctions';

import message from '../../../icons/speech-bubble.svg';
import briefcase from '../../../icons/briefcase.svg';
import request from '../../../icons/request.svg';

import pen from '../../../icons/pen.svg';
import { Colors } from '../../../styledHelpers/Colors';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IUsersReducer } from '../../../reducers/userReducers';
import { CustomInput } from '../../../styledHelpers/Components';

const Wrapper = styled.div`
    width:100%;
    height:140px;
    display:flex;
    flex-direction:column;
    padding:10px 30px;
    box-sizing:border-box;
    border-bottom:1px solid ${Colors.lightBackground};
    position: relative;
`;
const FunctionSection = styled.div`
    display:flex;
    justify-content:flex-end;
`;

const AvatarSection = styled.div`
    display:flex;
    flex-direction:column;
    height:100px;
`;

const UserAvatar = styled.img`
    width:75px;
    height:75px;
    border-radius:75px;
`;
const UserAvatarText = styled.span`
    margin-top:5px;
    color:${Colors.blue};
    cursor:pointer;
`;

const UserSection = styled.div`
    display:flex;
`;

const UserData = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    margin-left:25px;
`;

const UserDataTextBold = styled.span`
    color:${Colors.blue};
    font-weight:bold;
`;

const UserText = styled.span`
    color:${Colors.blue};
`;

const UserContact = styled.div`
    flex-grow:1;
    display:flex;
    padding:5px;
    flex-direction:column;
    justify-content:flex-end;
    align-items:flex-end;
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
    top:30px;
`;
const ButtonImg = styled.img`
    width:20px;
    height:20px;
`;

const CustomInputUser = styled(CustomInput)`
    width:200px;
    &:focus{
        border:1px solid #2684ff;
    }
`;

export const AboutUser: FC = () =>{

    const { currentUser, photoList } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState =>({
        ...globalState.users,
        ...globalState.photos
    }));

    const [isEdit, isEditHandler] = useState(false);

    const handleSubmit = () => {isEditHandler(!isEdit)}

    const [data, setData] = useState({
        phone: '',
        city: '',
        name: '',
        companyName: '',
        email: '',
        text: '',
    });
    
    useEffect(() => {
        const newData = {
            phone: currentUser?.phone,
            city: currentUser?.address.city,
            name: currentUser?.name,
            companyName: currentUser?.company.name,
            email: currentUser?.email,
            text: 'Parnter'
        }
        setData(newData);
      },[currentUser]);

    return(
        <Wrapper>
            <EditButton onClick={() => handleSubmit()}><ButtonImg src={pen}/></EditButton>
            <FunctionSection>
                    <UserFunction text="Message" icon={message}/>
                    <UserFunction text="Create a request" icon={request}/>
                    <UserFunction text="Add to cluster" icon={briefcase}/>
            </FunctionSection>
            <UserSection>
                <AvatarSection>
                    <UserAvatar src={photoList?.filter(el => el?.id === currentUser?.id)[0]?.url}/>
                    <UserAvatarText>See profile</UserAvatarText>
                </AvatarSection>
                <UserData>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.name
                            :(<CustomInputUser type='text' value={data?.name} onChange={e => setData({...data, name: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.companyName
                            :(<CustomInputUser type='text' value={data?.companyName} onChange={e => setData({...data, companyName: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserText>
                    {
                    !isEdit ? data?.city
                            :(<CustomInputUser type='text' value={data?.city} onChange={e => setData({...data, city: e.target.value})}/>)
                    }    
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.text
                            :(<CustomInputUser type='text' value={data?.text} onChange={e => setData({...data, text: e.target.value})}/>)
                    }  
                    </UserText>
                </UserData>
                <UserContact>
                    <UserText>
                    {
                    !isEdit ? data?.email
                            :(<CustomInputUser type='text' value={data?.email} onChange={e => setData({...data, email: e.target.value})}/>)
                    }  
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.phone
                            :(<CustomInputUser type='text' value={data?.phone} onChange={e => setData({...data, phone: e.target.value})}/>)
                    }
                    </UserText>
                </UserContact>
            </UserSection>
        </Wrapper>
    );
};

export default AboutUser;