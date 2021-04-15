import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/userReducers';

import styled from 'styled-components';

import { Publications } from './LinksShortcut/Publications';
import { EcoSystem } from './LinksShortcut/Ecosystem';
import { Entities } from './LinksShortcut/Entities';
import { QuickUserInfo } from './QuickUserInfo';

const Bar = styled.div`
    width:300px;
    height:500px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 5px;
`;

const Links = styled.div`
    display:flex;
    flex-direction: column;
    width:200px;
`;

export const LeftBar: FC = () => {

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    return(
        <Bar>
            <QuickUserInfo />
            <Links>
                <Publications />
                <EcoSystem />
                <Entities />
            </Links>
            {console.log({usersList})}  
        </Bar>
    );
};

export default LeftBar;