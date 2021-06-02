import { IDisplay } from '../entities/display';
import * as actionTypes from '../actions/actionTypes/displayTypes';

export interface IDisplayReducer{
    display: IDisplay;
};

const defaultState = (): IDisplay => ({
    display: false,
});

export default (state = defaultState(), action: any) => {
    switch(action.type){
        case actionTypes.GET_DISPLAY: {
            const payload: actionTypes.IDisplayTypes['GET_DISPLAY'] = action;
            return{
                ...state,
                display: payload.display
            }
        }
        default:{
            return state;
        }
    }
};