import React, { FC } from 'react';
import styled from 'styled-components';

import { Publications } from './LinksShortcut/Publications';
import { EcoSystem } from './LinksShortcut/Ecosystem';
import { Entities } from './LinksShortcut/Entities';
import { QuickUserInfo } from './QuickUserInfo';

const Bar = styled.div`
    width:300px;
    height:500px;
    /* background-color: red; */
    display:flex;
    flex-direction: column;
    align-items: center;
`;

const Links = styled.div`
    display:flex;
    flex-direction: column;
    width:200px;
`;

export const LeftBar: FC = () => {
    return(
        <Bar>  
            <QuickUserInfo />
            <Links>
                <Publications />
                <EcoSystem />
                <Entities />
            </Links>
        </Bar>
    );
};

export default LeftBar;