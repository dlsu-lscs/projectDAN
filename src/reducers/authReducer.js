import { LOG_IN } from '../actions/actionTypes';

const initialState = { user: false }
export default (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            console.log("dispatching: ");
            console.log(action.payload);
            state['user'] = action.payload;
            return initialState;
        default:
            return state;
    }
}