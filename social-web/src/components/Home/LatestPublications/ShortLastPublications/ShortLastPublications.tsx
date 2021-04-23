import React, {FC} from 'react';
import styled from 'styled-components';

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

export const ShortLastPublications: FC = () =>{
    return(
        <Container>
            <Title>
                Latest publications
            </Title>
            <ShortPublication postImage="https://i.ytimg.com/vi/jb5UfnZj68Q/maxresdefault.jpg" date="21.07.2021" userId={2137} title="Pasewelek klatwa ciesiela "/>
            <ShortPublication postImage="https://i.ytimg.com/vi/jb5UfnZj68Q/maxresdefault.jpg" date="21.07.2021" userId={2137} title="Pasewelek klatwa ciesiela "/>
            <ShortPublication postImage="https://i.ytimg.com/vi/jb5UfnZj68Q/maxresdefault.jpg" date="21.07.2021" userId={2137} title="Pasewelek klatwa ciesiela "/>
            <MorePublications>See more publications</MorePublications>
        </Container>
    );
}

export default ShortLastPublications;