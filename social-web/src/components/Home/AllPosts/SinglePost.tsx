import {FC} from 'react';
import styled from 'styled-components';


import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Post = styled.div`
    width:1000px;
    height:100px;
    background-color: ${Colors.white};
    border-radius:3px;
    box-shadow: 0px 2px 3px ${Colors.lightGray};
    padding:10px 15px;
    box-sizing: border-box;
    margin-bottom:10px;
`;

const Title = styled.div`
    color: ${Colors.blue};
    font-size: ${fontSize[20]};
`;

const ShortText = styled.span`
    margin-top:10px;
    font-size: ${fontSize[16]};
    height:50px;
    overflow-wrap: break-word;
`;

const PostInfo = styled.div`

`;

interface ISinglePost
{
    text: string;
    title: string;
}

export const SinglePost: FC<ISinglePost> = (props) =>{
    return(
        <Post>
            <Title>{props.title}</Title>
            <ShortText>{props.text}</ShortText>
            <PostInfo></PostInfo>
        </Post>
    );
}

export default SinglePost;