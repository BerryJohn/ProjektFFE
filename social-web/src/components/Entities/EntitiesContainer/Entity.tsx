import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    box-sizing:border-box;
    padding:5px;
    width:240px;
    height:90px;
    margin:5px;
    border-radius:2px;
    box-shadow: 0px 2px 4px ${Colors.lightGray};
    display:flex;
`;

const ImageCont = styled.div`
    width:80px;
    height:80px;
    box-shadow: 0px 0px 2px ${Colors.lightGray};
    border-radius:2px;
    overflow: hidden;
    object-fit:cover;
`;

const Image = styled.img`
    width:80px;
    height:80px;
`;

const Data = styled.div`
    display:flex;
    flex-direction:column;
    height:80px;
    width:150px;

`;

const Title = styled.span`
    padding:5px;
    height:40px;
    color:${Colors.blue};
    word-wrap: break-word;
    text-overflow:ellipsis;
    overflow: hidden;
`;

const SubText = styled.span`
    padding:5px;
    height:40px;
    font-size:${fontSize[14]};
    color:${Colors.gray};
    word-wrap: break-word;
    text-overflow:ellipsis;
    overflow: hidden;
    line-height: 18px;
`;

interface IEntity{
    photo:string;
    title:string;
    subtext:string;
}

export const Entity: FC<IEntity> = (props) => {
    return(
        <Wrapper>
            <ImageCont>
                <Image src={props?.photo}></Image>
            </ImageCont>
            <Data>
                <Title>{props?.title}</Title>
                <SubText>{props?.subtext}</SubText>
            </Data>
        </Wrapper>
    );
}

export default Entity;