import actionTypes from '../actions/actionTypes';
import { HttpError } from '../utils/httperror';

const user = (state = { Token: null, username: '', loginRequest: false }, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return { ...state, Token: action.payload.Token };

        case actionTypes.ADD_USERNAME:
            return { ...state, username: action.payload.username };

        case actionTypes.REMOVE_TOKEN:
            return { ...state, Token: null, error: null };

        case actionTypes.LOGIN_REQUEST:
            return { ...state, loginRequest: true };

        case actionTypes.LOGIN_SUCCESS:
            return { ...state, loginRequest: false, Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken };

        case actionTypes.LOGIN_FAILURE: {
            if (action.payload.error instanceof HttpError) {
                const { networkObj } = action.payload.error;
                return { ...state, loginRequest: false, error: networkObj.UserMessage };
            }
            return state;
        }

        default:
            return state;
    }

}

export default user;