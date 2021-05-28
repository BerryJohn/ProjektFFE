import React, {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    box-sizing:border-box;
    width:320px;
    height:220px;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    background-color:${Colors.white};
    box-shadow:0px 1px 3px ${Colors.gray};
    position: relative;
`;

const ImageBar = styled.div`
    box-sizing:border-box;
    padding:10px 10px 0px 10px;
    height:60px;
    width:100%;
    display:flex;
    align-items:center;
`;

const SmallImage = styled.img`
    height:50px;
    width:50px;
`;
const BackgroundImage = styled.img`
    height:200px;
    width:200px;
    position: absolute;
    opacity:.05;
    right:10px;
    top:10px;
`;

const TextContainer = styled.div`
    flex-grow:1;
    padding:10px;
    display:flex;
    flex-direction:column;
`;

const Title = styled.span`
    font-size:${fontSize[20]};
    margin-bottom:10px;
`;

const Text = styled.span`
    font-size:${fontSize[14]};
    color:${Colors.gray};
    line-height:20px;
`;

interface ITip {
    title:string;
    text:string;
    img:string;
}

export const Tip: FC<ITip> = (props) => {
    return(
        <Wrapper>
            <ImageBar>
                <SmallImage src={props?.img}/>
            </ImageBar>
            <TextContainer>
                <Title>
                    {props?.title}
                </Title>
                <Text>
                    {props?.text}
                </Text>
            </TextContainer>
            <BackgroundImage src={props?.img}/>
        </Wrapper>
    );
};

export default Tip;