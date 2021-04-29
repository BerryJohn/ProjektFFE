import React, { FC, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import styled from 'styled-components';
import { TopBar } from '../Common/TopBar/TopBar';
import { LeftBar } from '../Common/LeftBar/LeftBar';
import { Publications } from '../Publications/Publications';
import { Entities } from '../Entities/Entities';
import { Ecosystem } from '../Ecosystem/Ecosystem';

import { Colors } from '../../styledHelpers/Colors';

import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/userActions';
import { getPhotos } from '../../actions/photoActions';
import { getPosts } from '../../actions/postActions';

import { Home } from '../Home/Home';
const Content = styled.div`
    display:flex;
    /* flex-direction:column; */
    background-color: ${Colors.lightBackground};
    height:calc(100vh - 50px); //50px - topbar
`;

const Main = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');
    font-family: 'Roboto', sans-serif;
`;

const PageContent = styled.div`
    width:100%;
    padding:15px;
`;

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;

export const MainPage: FC = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch<GetUsers>(getUsers());
        dispatch<GetPhotos>(getPhotos());
        dispatch<GetPosts>(getPosts());
    }, []);
    
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
                            <Route path="/people">
                                <Entities />
                            </Route>
                            <Route path="/administration">
                                <Entities />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </PageContent>
                </Content>
            </Main>
        </Router>
    );
};

export default MainPage;