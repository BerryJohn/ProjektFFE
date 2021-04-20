import { combineReducers } from 'redux';

import photos, { IPhotosReducer } from './photoReducers';
import users, { IUsersReducer } from './userReducers';

export default combineReducers({
    users,
    photos
});

export interface IState {
    users: IUsersReducer;
    photos: IPhotosReducer;
};