import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux';
import  itemsStates  from './itemsStatesReducer'
import statesFilter from './statesFilterReducer'

const rootReducer = combineReducers({
    status,
    user,
    items,
    loading,
    itemsStates,
    statesFilter
});

export default rootReducer;