import { Action_types } from "../constants/Action_types";

const initial_state={
    loading:true,
    SpaceX_program_data:[],
}
export const SpaceX_program_data_reducer=(state=initial_state,{type,payload})=>{
    switch (type) {
        case Action_types.SET_INITIAL:
            return {state,SpaceX_program_data:payload,loading:false}

        case Action_types.SET_LANDING:
             return {state,SpaceX_program_data:payload,loading:false}


        case Action_types.SET_LAUNCH:
            return {state,SpaceX_program_data:payload}

         case Action_types.SET_YEAR:
                 return {state,SpaceX_program_data:payload}

                
        default:
            return state;
            break;
    }
}