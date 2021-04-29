import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

import ShortLastPublications from './ShortLastPublications/ShortLastPublications';
import Slider from './Slider/Slider';

import { useSelector } from 'react-redux';
import { IPost } from '../../../entities/posts';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IPostReducer } from '../../../reducers/postReducers';
import { IUsersReducer } from '../../../reducers/userReducers';

const Container = styled.div`
    width:1000px;
    height:300px;
    border-radius:2px;
    overflow: hidden;
    display:flex;
    box-shadow: 0px 0px 3px ${Colors.lightGray};
`;

export const LatestPublications: FC = () =>{

    const { usersList, photoList, currentUser, postList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
    }));

    const threePublications: IPost[] = [];

    for(let i = 0; i<3; i++)
    {
        const random = Math.floor(Math.random() * 99);  
        threePublications.push(postList[random]);
    }

    return(
        <Container>
            <Slider />
            <ShortLastPublications publications={threePublications}/>
        </Container>
    );
}

export default LatestPublications;