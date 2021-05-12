import {combineReducers} from 'redux'
import {SpaceX_program_data_reducer} from './reducer'

export const reducers=combineReducers({
    all:SpaceX_program_data_reducer,
});

