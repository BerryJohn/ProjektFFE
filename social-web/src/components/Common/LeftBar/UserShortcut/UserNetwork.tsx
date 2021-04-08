import React, { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';
import { UserShortcut } from '../../../../styledHelpers/Components';

import  networkImg  from '../../../../icons/people.svg';
import publicationButtonImg  from '../../../../icons/user-plus.svg';

const NetworkImage = styled.img`
    margin-right:10px;
    width:25px;
`;

const AddNetwork = styled.div`
    width:25px;
    height:20px;
    border: 1px solid ${Colors.darkBlue};
    border-radius: 4px;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 1px ${Colors.lightGray};
    /* position:relative; */
    right:0px;
    transition:.1s;
    &:hover{
        background-color: ${Colors.darkBlue};
    }
`;


export const UserNetwork: FC = () => {
    return(
        <UserShortcut>
            <NetworkImage src={networkImg}/>
            Your network
            <AddNetwork>
                <img src={publicationButtonImg}/>
            </AddNetwork>
        </UserShortcut>
    );
};

export default UserNetwork;