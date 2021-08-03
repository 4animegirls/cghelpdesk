import actionTypes from '../actions/actionTypes';

const user = (state = { Token: null, username: '' }, action) => {
    switch (action.type) {
        case 'ADD_TOKEN':
            return { ...state, user: { Token: action.payload.token } };

        case actionTypes.ADD_USERNAME:
            return { ...state, user: { username: action.payload.username } };

        case actionTypes.REMOVE_TOKEN:
            return { ...state, user: { Token: null } };

        case actionTypes.LOGIN_SUCCESS:
            return { ...state, user: { Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.RefreshToken } };

        default:
            return state;
    }

}

export default status;