import { loginPost, itemsGet } from '../utils'
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
            dispatch(loginFailure(e));
        }
    }
}


const itemsRequest = () => ({
    type: actionTypes.ITEMS_REQUEST
});

const itemsSuccess = (response) => ({
    type: actionTypes.ITEMS_SUCCESS,
    payload: { response }
});

const itemsFailure = (error) => ({
    type: actionTypes.ITEMS_FAILURE,
    payload: { error }
});

export const itemsAction = (token) => {
    return async (dispatch) => {
        try {
            dispatch(itemsRequest())
            let res = await itemsGet(token);
            dispatch(itemsSuccess(res));
        } catch (e) {
            dispatch(itemsFailure(e));
        }
    }
}