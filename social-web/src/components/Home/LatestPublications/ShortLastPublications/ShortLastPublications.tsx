import React, {FC} from 'react';

import styled from 'styled-components';
import { IPost } from '../../../../entities/posts';

import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';

import { ShortPublication } from './ShortPublication';


const Container = styled.div`
    background-color: ${Colors.white};
    flex-grow:1;
    height:300px;
    border-radius:4px;
    overflow: hidden;
    padding:12px;
`;

const Title = styled.div`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:5px 0px;
`;

const MorePublications = styled.div`
    color: ${Colors.blue};
    font-size: ${fontSize[18]};
`;

const Shorts = styled.div`
    min-height:226px;
`;

export interface ILastPublications{
    publications: IPost[];
}

const postDefaultPhoto:string = 'https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg';

export const ShortLastPublications: FC<ILastPublications> = (props) =>{
    return(
        <Container>
            <Title>
                Latest publications
            </Title>
            <Shorts>
                {props.publications.map((el,index) => (
                    <ShortPublication key={index}
                    postImage={postDefaultPhoto} 
                    date="21.07.2021" 
                    userId={el?.userId} 
                    title={el?.title}/>
                ))}
            </Shorts>
            <MorePublications>See more publications</MorePublications>
        </Container>
    );
}

export default ShortLastPublications;