import actionTypes from '../actions/actionTypes';

const loading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS_LOADING:
            return true;

        case actionTypes.ADD_ITEMS_SUCCESS:
            return false;

        case actionTypes.ADD_ITEMS_FAILURE:
            return false;

        case actionTypes.ITEMS_REQUEST:
            return true;

        case actionTypes.ITEMS_SUCCESS:
            return false;

        case actionTypes.ITEMS_FAILURE:
            return false;

        case actionTypes.SET_LOADING:
            return true;
        
        case actionTypes.SET_FINISHED_LOADING:
            return false;

        case actionTypes.ADD_STATES_REQUEST:
            return true;

        case actionTypes.ADD_STATES_SUCCESS:
            return false;
  
        case actionTypes.ADD_STATES_FAILURE:
            return false;

        default:
            return state
    }
}

export default loading;