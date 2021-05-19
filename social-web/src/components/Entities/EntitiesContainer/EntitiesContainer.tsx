import React, {FC} from 'react';
import styled from 'styled-components';
import Entity from './Entity';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
`;

export const EntitiesContainer: FC = () => {

    return(
    <Wrapper>
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
        <Entity />
    </Wrapper>
    );
}

export default EntitiesContainer;