import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';

import ShortLastPublications from './ShortLastPublications/ShortLastPublications';
import Slider from './Slider/Slider';

const Container = styled.div`
    width:1000px;
    height:300px;
    border-radius:2px;
    overflow: hidden;
    display:flex;
    box-shadow: 0px 0px 3px ${Colors.lightGray};
`;

export const LatestPublications: FC = () =>{
    return(
        <Container>
            <Slider />
            <ShortLastPublications />
        </Container>
    );
}

export default LatestPublications;