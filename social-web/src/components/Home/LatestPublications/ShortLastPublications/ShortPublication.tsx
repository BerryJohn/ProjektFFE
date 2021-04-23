import React, {FC} from 'react';

import styled from 'styled-components';
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
    return(
        <Container>
            <PostImage src={props?.postImage}/>
            <PostContent>
                <PostTitle>
                    {props?.title}
                </PostTitle>
                <PostUserInfo>
                    <PostDate>{props?.date}</PostDate>
                    <UserAvatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cfa5a4e4-997b-44d5-81dc-1d68b360d374/de75ve0-bda32f61-67d4-4af8-93ff-a00073b07d26.png/v1/fill/w_899,h_889,q_70,strp/demonzz_by_avihlo_de75ve0-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD04OTAiLCJwYXRoIjoiXC9mXC9jZmE1YTRlNC05OTdiLTQ0ZDUtODFkYy0xZDY4YjM2MGQzNzRcL2RlNzV2ZTAtYmRhMzJmNjEtNjdkNC00YWY4LTkzZmYtYTAwMDczYjA3ZDI2LnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.m7YRvTKoR7oqReM5ToBABw6mIQXbXcdnpsHNFgfyuBs"></UserAvatar>
                    <UserName>John Doe</UserName>
                </PostUserInfo>
            </PostContent>
        </Container>
    );
}

export default ShortPublication;