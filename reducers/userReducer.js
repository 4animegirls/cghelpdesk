import actionTypes from '../actions/actionTypes';
import { HttpError } from '../utils/httperror';

const user = (state = { Token: null, username: '' }, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return { ...state,  Token: action.payload.Token  };

        case actionTypes.ADD_USERNAME:
            return { ...state,  username: action.payload.username  };

        case actionTypes.REMOVE_TOKEN:
            return { ...state, Token: null, error:null  };

        case actionTypes.LOGIN_SUCCESS:
            console.log(action.payload.response.Data.Token)
            return { ...state, Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken  };

        case actionTypes.LOGIN_FAILURE: {
            if (action.payload.error instanceof HttpError) {
                const { networkObj } = action.payload.error;
                return { ...state, error: networkObj.UserMessage };
            }
            return state;
        }

        default:
            return state;
    }

}

export default user;