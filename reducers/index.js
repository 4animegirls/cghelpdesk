import status from './statusReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    status
});

export default rootReducer;