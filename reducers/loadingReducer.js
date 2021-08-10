import actionTypes from '../actions/actionTypes';

const loading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS_LOADING:
            return true;

        case actionTypes.ADD_ITEMS_SUCCESS:
            return false;

        case actionTypes.ADD_ITEMS_FAILURE:
            return false;
        
        default:
            return state
    }
}

export default loading;