import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../styledHelpers/FontSizes';

import logoutImg from '../../../../../icons/logout.svg';

const LogoutButton = styled.button`
    width:100%;
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    outline:none;
    border:none;
    border-top:1px solid ${Colors.lightGray};
    cursor: pointer;
`;

// interface IExpMenu{
//     closeMenu(): void;
// }

export const Logout: FC = props => {

    // const closeDropMenu = () => {
    //     props.closeMenu();
    // }

    return(
        <LogoutButton>
            <img src={logoutImg}></img>
            Logout
        </LogoutButton>
    );
};

export default Logout;