import actionTypes from '../actions/actionTypes';

const loading = (status = false, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEMS_LOADING:
            return true;

        case actionTypes.ADD_ITEMS_SUCCESS:
            return false;

        case actionTypes.ADD_ITEMS_FAILURE:
            return false;
    }
}

export default loading;