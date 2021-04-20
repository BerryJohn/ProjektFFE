import React,{ FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import {CircleNotify} from '../../../../styledHelpers/Components';

import comments from '../../../../icons/comments.svg';

interface NotifyButton{
    image: string,
    altText: string
}

export const RoundButton: FC<NotifyButton> = (props) =>{
    return(
        <CircleNotify>
            <img src={props.image} alt={props.altText}/>
        </CircleNotify>
    );
};

export default RoundButton;