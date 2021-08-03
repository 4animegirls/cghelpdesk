import status from './statusReducer';
import user from './userReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    status,
    user
});

export default rootReducer;