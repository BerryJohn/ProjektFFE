import {FC} from 'react';
import styled from 'styled-components';

const Containter = styled.div`
    background-color: #61dbd1;
    width:300px;
    height:300px;
`;

export const Slider: FC = () =>{
    return(
        <Containter/>
    );
}

export default Slider;