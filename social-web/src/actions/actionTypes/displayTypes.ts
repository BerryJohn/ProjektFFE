import { IDisplay } from '../../entities/display';

export const GET_DISPLAY = 'GET_DISPLAY';

export interface IDisplayTypes{
    GET_DISPLAY:{
        display: IDisplay;
    };
};