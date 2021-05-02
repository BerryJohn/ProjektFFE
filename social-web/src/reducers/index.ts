import { combineReducers } from 'redux';

import photos, { IPhotosReducer } from './photoReducers';
import posts, { IPostReducer } from './postReducers';
import users, { IUsersReducer } from './userReducers';
import comments, {ICommentReducer} from './commentReducer';

export default combineReducers({
    users,
    photos,
    posts,
    comments
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
    posts: IPostReducer;
    comments: ICommentReducer;
};