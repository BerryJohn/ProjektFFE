import React,{ FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import {CircleNotify} from '../../../../styledHelpers/Components';

import comments from '../../../../icons/comments.svg';



export const NotifyButton: FC = () =>{
    return(
        <CircleNotify>
            <img src={comments} alt="Click to check comments notifications"/>
        </CircleNotify>
    );
};

export default NotifyButton;