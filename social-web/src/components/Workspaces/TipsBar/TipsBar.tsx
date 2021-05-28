import React, {FC} from 'react';
import styled from 'styled-components';

import entities from '../../../icons/entities3.svg';
import calendar from '../../../icons/calendar.svg';
import diagram from '../../../icons/diagram.svg';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

import Tip from './Tip';

const Wrapper = styled.div`
    margin-top:20px;
    box-sizing:border-box;
    width:1000px;
    height:280px;
    border-radius:2px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
    background-color:${Colors.lightGray};
    border:1px solid ${Colors.gray};
    box-shadow:1px 2px 2px ${Colors.lightGray};
`;

const TextBar = styled.div`
    padding:15px 20px;
    color:${Colors.gray};
    font-weight:bold;
    display:flex;
    justify-content:space-between;
`;

const Text = styled.span``;

const TipsContainer = styled.div`
    flex-grow:1;
    display:flex;
    justify-content:space-evenly;
    /* align-items:center; */
`;

const defaultText:string = `                    
    Lorem ipsum dolor sit, 
    amet consectetur adipisicing elit. 
    Beatae aperiam deleniti rem distinctio voluptate quam 
    quisquam tempore esse adipisci repellat, asperiores mollitia?`;

export const TipsBar: FC = () => {

    
    return(
        <Wrapper>
            <TextBar>
                <Text>
                    Start working on corporate matters
                </Text>
                <Text>
                    Hide
                </Text>
            </TextBar>
            <TipsContainer>
                <Tip title='Explore your entities' text={defaultText} img={entities}/>
                <Tip title='Structure the ownership' text={defaultText} img={diagram}/>
                <Tip title='Fefine the calendar' text={defaultText} img={calendar}/>
            </TipsContainer>
        </Wrapper>
    );
};

export default TipsBar;