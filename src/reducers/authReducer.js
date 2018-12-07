import { LOG_IN, REF_KEYS } from '../actions/actionTypes';

const initialState = { user: false, ref_keys: {} }
export default (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            console.log("dispatching: ");
            console.log(action.payload);
            state['user'] = action.payload;
            return initialState;
        
        case REF_KEYS:
            console.log("ADEDD");
            state['ref_keys'][action.key] = action.val;
            return state;
        
        default:
            return state;
    }
}