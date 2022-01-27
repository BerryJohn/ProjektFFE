import React,{ FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import {CircleNotify} from '../../../../styledHelpers/Components';

import bell from '../../../../icons/bell.svg';



export const NotifyButtonBell: FC = () =>{
    return(
        <CircleNotify>
            <img src={bell} alt="Click to check comments notifications"/>
        </CircleNotify>
    );
};

export default NotifyButtonBell;