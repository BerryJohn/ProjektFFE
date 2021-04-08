import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

import { UserNetwork } from './UserShortcut/UserNetwork';
import { UserPublications } from './UserShortcut/UserPublications';

const UserBlock = styled.div`
    width:250px;
    height: 200px;
    background-color: ${Colors.white};
    margin-top:10px;
    border-radius: 5px;
    box-shadow: 0px 0px 2px ${Colors.lightGray};
`;

const AboutUserInfo = styled.div`
    width:250px;
    max-height:150px;
    border-bottom:1px solid ${Colors.lightGray};
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const UserAvatar = styled.img`
    width:60px;
    height:60px;
    border-radius: 60px;
    box-shadow: 0px 0px 2px ${Colors.black};
    margin-top:10px;
`;

const UserName = styled.span`
    margin-top:10px;
    font-weight: 600;
    color:${Colors.blue}; 
`;

const UserCompany = styled.span`
    color:${Colors.lightGray};
    font-size: ${fontSize[14]};
    margin: 10px 0px;
`;

const UserShortcuts = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:80px;
    padding:5px;
`;

export const QuickUserInfo: FC = () => {
    return(
        <UserBlock>
            <AboutUserInfo>
                <UserAvatar src="https://static-cdn.jtvnw.net/jtv_user_pictures/61af75d0-a78c-4938-a02b-a7985f8c8a44-profile_image-300x300.png"/>
                <UserName>Jamal Amrah</UserName>
                <UserCompany>Job title - Company</UserCompany>
            </AboutUserInfo>
            <UserShortcuts>
                <UserNetwork />
                <UserPublications />
            </UserShortcuts>
        </UserBlock>
    );
};

export default QuickUserInfo;