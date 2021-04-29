import { combineReducers } from 'redux';

import photos, { IPhotosReducer } from './photoReducers';
import posts, { IPostReducer } from './postReducers';
import users, { IUsersReducer } from './userReducers';

export default combineReducers({
    users,
    photos,
    posts
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    posts: IPostReducer;
};