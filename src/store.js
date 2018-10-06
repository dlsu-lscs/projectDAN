import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";


const rootReducer = combineReducers({
    authReducer,
});

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;