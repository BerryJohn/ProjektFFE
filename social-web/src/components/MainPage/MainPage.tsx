import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

import styled from 'styled-components';

import { TopBar } from '../Common/TopBar/TopBar';
import { LeftBar } from '../Common/LeftBar/LeftBar';
import { Publications } from '../Publications/Publications';
import { Entities } from '../Entities/Entities';
import { Ecosystem } from '../Ecosystem/Ecosystem';

import { Colors } from '../../styledHelpers/Colors';

const Content = styled.div`
    display:flex;
    /* flex-direction:column; */
    background-color: ${Colors.lightBackground};
    height:calc(100vh - 50px); //50px - topbar
`;

const Main = styled.div`
    font-family: sans-serif;
`;

const PageContent = styled.div`
    background-color: green;
    width:100%;
    padding:15px;
`;

export const MainPage: FC = () => {
    return(
        <Router>
            <Main>
                <TopBar />
                <Content>
                    <LeftBar />
                    <PageContent>
                        <Switch>
                            <Route path="/publications">
                                <Publications />
                            </Route>
                            <Route path="/ecosystem">
                                <Ecosystem />
                            </Route>
                            <Route path="/entities">
                                <Entities />
                            </Route>
                        </Switch>
                    </PageContent>
                </Content>
            </Main>
        </Router>
    );
};

export default MainPage;