import React, {FC} from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { IState } from '../../../../reducers';
import { IPhotosReducer } from '../../../../reducers/photoReducers';
import { IUsersReducer } from '../../../../reducers/userReducers';
import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';


const Container = styled.div`
    background-color: ${Colors.white};
    height:70px;
    overflow: hidden;
    padding:1px;
    display:flex;
    margin-bottom:5px;
`;

const PostImage = styled.img`
    width:70px;
    height:70px;
    border-radius:2px;
    object-fit: cover;
`;

const PostContent = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    height:70px;
    padding:3px;
    box-sizing: border-box;
`;

const PostTitle = styled.div`
    height:45px;
    color: ${Colors.darkBlue};
`;

const PostUserInfo = styled.div`
    flex-grow:1;
    display:flex;
    align-items:center;
    color: ${Colors.gray};
    font-size: ${fontSize[12]};
`;

const PostDate = styled.span`
    margin: 0px 10px 0px 0px;
`;

const UserAvatar = styled.img`
    width:15px;
    height:15px;
    border-radius:15px;
    margin-right:5px;
`;

const UserName = styled.span``;

interface IShortPublication{
    postImage: string;
    date: string;
    title: string;
    userId: number;
}

export const ShortPublication: FC<IShortPublication> = (props) =>{
    
    const { usersList, photoList} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));
    

    return(
        <Container>
            <PostImage src={props?.postImage}/>
            <PostContent>
                <PostTitle>
                    {props?.title}
                </PostTitle>
                <PostUserInfo>
                    <PostDate>{props?.date}</PostDate>
                    <UserAvatar src={photoList[props?.userId - 1]?.url}></UserAvatar>
                    <UserName>{usersList[props?.userId - 1]?.name}</UserName> 
                    {/* -1 because for instance ID 10 is over array */}
                </PostUserInfo>
            </PostContent>
        </Container>
    );
}

export default ShortPublication;