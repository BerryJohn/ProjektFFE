import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';


const Wrapper = styled.div`
    width:1000px;
    padding:10px;
    box-sizing:border-box;
    border-bottom: 1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.darkBlue};
    margin-top:5px;
`;

export const IntReviews: FC = () =>{
    return(
        <Wrapper>
            <Title>Internal reviews</Title>
        </Wrapper>
    );
};

export default IntReviews;