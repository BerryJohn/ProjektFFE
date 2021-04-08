import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../Common/TopBar/TopBar';
import { LeftBar } from '../Common/LeftBar/LeftBar';

import { Colors } from '../../styledHelpers/Colors';

const Content = styled.div`
    display:flex;
    flex-direction:column;
    background-color: ${Colors.lightBackground};
    height:calc(100vh - 50px); //50px - topbar
`;

const Main = styled.div`
    font-family: sans-serif;
`;

export const MainPage: FC = () => {
    return(
        <Main>
            <TopBar />
            <Content>
                <LeftBar />
            </Content>
        </Main>
    );
};

export default MainPage;