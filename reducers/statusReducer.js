import actionTypes from '../actions/actionTypes';
import { HttpError } from '../utils/httperror';


const status = (state = {page: 'login'}, action) => {
    switch(action.type){
        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        default:
            return state;
    }

}

export default status;