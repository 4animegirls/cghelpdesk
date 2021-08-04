import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    status,
    user,
    items
});

export default rootReducer;