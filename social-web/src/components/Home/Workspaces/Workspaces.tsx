import {FC} from 'react';
import styled from 'styled-components';

import WorkspaceContainter from './WorkspaceContainer/WorkspaceContainer';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import AllPosts from '../AllPosts/AllPosts';


const Title = styled.h1`
    font-size: ${fontSize[20]};
    color: ${Colors.darkBlue};
    margin:15px 10px;
`;

export const Workspaces: FC = () =>{
    return(
        <>
            <Title>Workspaces</Title>
            <WorkspaceContainter/>
            <Title>Resume your work</Title>
            <AllPosts/>
        </>
    );
}

export default Workspaces;