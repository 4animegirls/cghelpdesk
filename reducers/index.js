import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    status,
    user,
    items
});

export default rootReducer;