import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { UserFunction } from './UserFunctions';

import plus from '../../../icons/plus.svg';
import pen from '../../../icons/pen.svg';
import { Colors } from '../../../styledHelpers/Colors';

const Wrapper = styled.div`
    width:100%;
    height:130px;
    display:flex;
    flex-direction:column;
    padding:10px;
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
    /* padding:5px; */
`;

const UserAvatar = styled.img`
    width:75px;
    height:75px;
    border-radius:75px;
`;
const UserAvatarText = styled.span`
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

const CustomInputText = styled.input`
    
`;

interface IAboutUser{
    name:string;
    userName:string;
    email:string;
    city:string;
    phone:string;
    companyName:string;
    avatar:string;
}

export const AboutUser: FC<IAboutUser> = (props) =>{
    const [isEdit, isEditHandler] = useState(false);
    const handleSubmit = () => {isEditHandler(!isEdit)}   
    const [data, setData] = useState({
        phone: props?.phone,
        city: props?.city,
        name: props?.name,
        companyName: props?.companyName,
        email: props?.email,
        text: 'Parnter',
    });

    return(
        <Wrapper>
            <EditButton onClick={() => handleSubmit()}><ButtonImg src={pen}/></EditButton>
            <FunctionSection>
                    <UserFunction text="Message" icon={plus}/>
                    <UserFunction text="Create a request" icon={plus}/>
                    <UserFunction text="Add to cluster" icon={plus}/>
            </FunctionSection>
            <UserSection>
                <AvatarSection>
                    <UserAvatar src={props?.avatar}/>
                    <UserAvatarText>See profile</UserAvatarText>
                </AvatarSection>
                <UserData>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.name
                            :(<input type='text' value={data?.name} onChange={e => setData({...data, name: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserDataTextBold>
                    {
                    !isEdit ? data?.companyName
                            :(<input type='text' value={data?.companyName} onChange={e => setData({...data, companyName: e.target.value})}/>)
                    }  
                    </UserDataTextBold>
                    <UserText>
                    {
                    !isEdit ? data?.city
                            :(<input type='text' value={data?.city} onChange={e => setData({...data, city: e.target.value})}/>)
                    }    
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.text
                            :(<input type='text' value={data?.text} onChange={e => setData({...data, text: e.target.value})}/>)
                    }  
                    </UserText>
                </UserData>
                <UserContact>
                    <UserText>
                    {
                    !isEdit ? data?.email
                            :(<input type='text' value={data?.email} onChange={e => setData({...data, email: e.target.value})}/>)
                    }  
                    </UserText>
                    <UserText>
                    {
                    !isEdit ? data?.phone
                            :(<input type='text' value={data?.phone} onChange={e => setData({...data, phone: e.target.value})}/>)
                    }
                    </UserText>
                </UserContact>
            </UserSection>
        </Wrapper>
    );
};

export default AboutUser;