import status from './statusReducer';
import user from './userReducer';
import items from './itemsReducer';
import locale from './localeReducer';
import loading from './loadingReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    status,
    user,
    items,
    locale
});

export default rootReducer;