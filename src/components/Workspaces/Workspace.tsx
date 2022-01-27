import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IWorkspaceData, workspaceData } from '../../tools/workspacesData';
import WorkspaceComments from './WorkspaceComments/WorkspaceComments';
import TipsBar from './TipsBar/TipsBar';
import WorkspaceBar from './WorkspaceBar/WorkspaceBar';

const Container = styled.div`
    width:1000px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

interface ParamTypes {
    workspace: string;
};

export const Workspace: FC = () => {

    let { workspace } = useParams<ParamTypes>();
    
    const currentPageInfo:IWorkspaceData = workspaceData.filter(el => el.id === workspace)[0];

    return(
        <Container>
            <WorkspaceBar title={currentPageInfo.name} icon={currentPageInfo.icon}/>
            <TipsBar />
            <WorkspaceComments />
        </Container>
    );
};

export default Workspace;