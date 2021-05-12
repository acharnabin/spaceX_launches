import {Action_types} from '../constants/Action_types'

export const first_load_data=(data)=>{
    return{
        type:Action_types.SET_INITIAL,
        payload:data,
    }
}

export const year_filter_load_data=(data)=>{
    return{
        type:Action_types.SET_YEAR,
        payload:data
    }
}

export const launch_filter_load_data=(data)=>{
    return{
        type:Action_types.SET_LAUNCH,
        payload:data
    }
}

export const landing_filter_load_data=(data)=>{
    return{
        type:Action_types.SET_LANDING,
        payload:data
    }
}