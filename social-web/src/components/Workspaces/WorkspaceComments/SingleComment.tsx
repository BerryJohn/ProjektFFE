import {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IPost } from '../../../entities/posts';
import { ISingleUser } from '../../../entities/users';
import { IState } from '../../../reducers';
import { IPostReducer } from '../../../reducers/postReducers';
import { IUsersReducer } from '../../../reducers/userReducers';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

import FilterOption from './FilterOption';

const Comment = styled.div`
    width:1000px;
    height:100px;
    background-color: ${Colors.white};
    border-radius:3px;
    box-shadow: 0px 2px 3px ${Colors.lightGray};
    padding:10px 15px;
    box-sizing: border-box;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
`;

const Title = styled.div`
    color: ${Colors.blue};
    font-size: ${fontSize[20]};
    margin-bottom:5px;
`;

const ShortText = styled.span`
    font-size: ${fontSize[16]};
    min-height:30px;
    overflow-wrap: break-word;
    margin-bottom:5px;
`;

const CommentInfo = styled.div`
    display:flex;
    align-items:center;
    font-size:${fontSize[12]};
    color:${Colors.gray};
    margin-top:5px;
`;

interface ICorpName{
    color?:string;
}

const CorpName = styled.span<ICorpName>`
    letter-spacing:.4px;
    ${props => (`color:rgb(${props.color})`)}
`;
const LastUpdate = styled(CorpName)`
`;

const InfoInterspace = styled.span`
    margin:0px 10px;
`;

interface ISinglePost{
    text: string;
    title: string;
    postId: number;
}

const defaultImg: string = 'https://pliki.portalspozywczy.pl/i/10/24/01/102401_940.jpg';

export const SingleComment: FC<ISinglePost> = (props) =>{

    const { usersList, postList} = useSelector<IState, IUsersReducer & IPostReducer>(globalState => ({
        ...globalState.users,
        ...globalState.posts
    }));

    const currentPost:IPost = postList[props?.postId - 1];
    const postOwner:ISingleUser = usersList[currentPost?.userId - 1];

    return(
        <Comment>          
            <Title>{currentPost?.title}</Title>
            <ShortText>{props.text}</ShortText>
            <CommentInfo>
                <CorpName color='61, 219, 88'>SAS</CorpName>
                <InfoInterspace>•</InfoInterspace>
                <LastUpdate>Updated X days ago by {postOwner?.name}</LastUpdate>
            </CommentInfo>
        </Comment>
    );
}

export default SingleComment;