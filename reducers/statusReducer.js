import actionTypes from '../actions/actionTypes';
import { HttpError } from '../utils/httperror';

const status = (state = {theme: 'dark', user: {Token: null, username: ''}, page: 'login', error: null}, action) => {
    switch(action.type){
        case 'ADD_USERNAME':
            return {...state, user:{username: action.payload.username} };

        case 'ADD_TOKEN':
            return {...state, user:{Token: action.payload.token}};

        case 'REMOVE_TOKEN':
            return {...state, user:{Token: null}};
        
        case 'CHANGE_THEME':
            return {...state, theme: action.payload.theme};

        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        case actionTypes.LOGIN_SUCCESS:
            return {...state, user:{Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken}};
        
        case actionTypes.LOGIN_FAILURE: {
            if(action.payload.error instanceof HttpError) {
                const { networkObj } = action.payload.error;
                return { ...state, error: networkObj.UserMessage};
            }
            return state;
        }
        
        default:
            return state;
    }

}

export default status;