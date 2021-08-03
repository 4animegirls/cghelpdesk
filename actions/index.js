import { loginPost } from '../utils'
import actionTypes from './actionTypes';

export const addToken = (token) => ({
    type: 'ADD_TOKEN',
    payload: { token }
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN'
});

const loginRequest = () => ({
    type: actionTypes.LOGIN_REQUEST
});

const loginSuccess = (response) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: { response }
});

const loginFailure = (error) => ({
    type: actionTypes.LOGIN_FAILURE,
    payload: { error }
});

export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            let res = await loginPost(userLogin);
            dispatch(loginSuccess(res));
        } catch (e) {
            loginFailure(e);
        }
    }
}