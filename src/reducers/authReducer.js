import { LOG_IN } from '../actions/actionTypes';

const initialState = { yes: false }
export default (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            state['yes'] = action.payload;
            return initialState;
        default:
            return state;
    }
}