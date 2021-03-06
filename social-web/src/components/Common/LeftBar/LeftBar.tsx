import { FC } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../reducers';
import { IUsersReducer } from '../../../reducers/userReducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';

import styled from 'styled-components';

import { Publications } from './LinksShortcut/Publications';
import { EcoSystem } from './LinksShortcut/Ecosystem';
import { Entities } from './LinksShortcut/Entities';
import { QuickUserInfo } from './QuickUserInfo';
import { IDisplayState } from '../../../reducers/displayReducer';

interface IBar {
    hidden:boolean;
}

const Bar = styled.div<IBar>`
    min-width:300px;
    max-width:300px;
    height:500px;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0px 5px;
    ${props => (props.hidden && 'transform: translateX(-300px)')};
    transition:.1s;
`;

const Links = styled.div`
    display:flex;
    flex-direction: column;
    width:200px;
`;

export const LeftBar: FC = () => {

    const { photoList, currentUser, isFullscreen } = useSelector<IState, IUsersReducer & IPhotosReducer & IDisplayState>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.display
    }));
    
    return(
        <Bar hidden={isFullscreen}>
            <QuickUserInfo userAvatar={photoList?.filter(el => el?.id === currentUser?.id)[0]?.url} userName={currentUser?.name} userCompany={currentUser?.company?.name}/>
            <Links>
                <Publications />
                <EcoSystem />
                <Entities />
            </Links>
        </Bar>
    );
};

export default LeftBar;