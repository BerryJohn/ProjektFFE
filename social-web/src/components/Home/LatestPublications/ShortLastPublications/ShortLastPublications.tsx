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
                <ShortPublication postImage={postDefaultPhoto} 
                                date="21.07.2021" 
                                userId={props.publications[0]?.userId} 
                                title={props.publications[0]?.title}/>
                                
                <ShortPublication postImage={postDefaultPhoto} 
                                date="21.07.2021" 
                                userId={props.publications[1]?.userId} 
                                title={props.publications[1]?.title}/>
                <ShortPublication postImage={postDefaultPhoto} 
                              date="21.07.2021" 
                              userId={props.publications[2]?.userId} 
                              title={props.publications[2]?.title}/>
            </Shorts>
            <MorePublications>See more publications</MorePublications>
        </Container>
    );
}

export default ShortLastPublications;