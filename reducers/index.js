import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux';
import  itemsStates  from './itemsStatesReducer'

const rootReducer = combineReducers({
    status,
    user,
    items,
    loading,
    itemsStates
});

export default rootReducer;