import { loginPost, itemsGet } from '../utils'
import actionTypes from './actionTypes';

export const changeLocale = (locale) => ({
  type: actionTypes.LOCALE_CHANGE,
  payload: locale
});

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

const itemsSuccess = (items) => ({
  type: actionTypes.ITEMS_SUCCESS,
  payload: { items }
});

const itemsFailure = (error) => ({
  type: actionTypes.ITEMS_FAILURE,
  payload: { error }
});

export const itemsAction = (token, page) => {
  return async (dispatch) => {
    try {
      dispatch(itemsRequest())
      let res = await itemsGet(token, page);
      dispatch(itemsSuccess(res.Data.Items));
    } catch (e) {
      dispatch(itemsFailure(e));
    }
  }
}

const addItemsRequest = () => ({
  type: actionTypes.ITEMS_REQUEST
});

const addItemsSuccess = (items) => ({
  type: actionTypes.ADD_ITEMS_SUCCESS,
  payload: { items }
});

const addItemsFailure = (error) => ({
  type: actionTypes.ITEMS_FAILURE,
  payload: { error }
});

export const addItemsAction = (token, page) => {
  return async (dispatch) => {
    try {
      dispatch(addItemsRequest())
      let res = await itemsGet(token, page);
      dispatch(addItemsSuccess(res.Data.Items));
    } catch (e) {
      dispatch(addItemsFailure(e));
    }
  }
}
