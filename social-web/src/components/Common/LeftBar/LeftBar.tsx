import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/userReducers';

import styled from 'styled-components';

import { Publications } from './LinksShortcut/Publications';
import { EcoSystem } from './LinksShortcut/Ecosystem';
import { Entities } from './LinksShortcut/Entities';
import { QuickUserInfo } from './QuickUserInfo';

import { IPhotosReducer } from '../../../reducers/photoReducers';

const Bar = styled.div`
    width:400px;
    height:500px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 5px;
`;

const Links = styled.div`
    display:flex;
    flex-direction: column;
    width:210px;
`;

export const LeftBar: FC = () => {

    const { usersList, photoList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));

    // const { photoList } = useSelector<IState, IPhotosReducer>(globalState => ({
    //     ...globalState.photos
    // }));


    return(
        <Bar>
            <QuickUserInfo userAvatar={photoList[currentUser?.id]?.url} userName={usersList[0]?.name} userCompany={usersList[0]?.company.name}/>
            <Links>
                <Publications />
                <EcoSystem />
                <Entities />
            </Links>
        </Bar>
    );
};

export default LeftBar;