import { loginPost, itemsGet, itemGet, itemsStatesGet } from '../utils'
import actionTypes from './actionTypes';

export const addToken = (Token, RefreshToken = null) => ({
  type: 'ADD_TOKEN',
  payload: { Token, RefreshToken }
});

export const changeLocale = (locale) => ({
  type: actionTypes.LOCALE_CHANGE,
  payload: locale
});

export const setLocaleAsUpdated = () => ({
  type: actionTypes.LOCALE_UPDATED
});


export const logout = () => {
  return (dispatch) => {
    dispatch(removeToken());
    dispatch(changeStatesFilter('all'));
    dispatch(removeItems());
  }
}

export const removeToken = () => (
  {
    type: 'REMOVE_TOKEN'
  }
);

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

export const removeItems = () => (
  {
    type: actionTypes.REMOVE_ITEMS
  }
)

export const itemsAction = (token, page, filter = null) => {
  return async (dispatch) => {
    try {
      dispatch(itemsRequest())
      let res = await itemsGet(token, page, filter);
      dispatch(itemsSuccess(res.Data.Items));
    } catch (e) {
      dispatch(itemsFailure(e));
    }
  }
}

//marekova trojička

const itemRequest = () => ({
  type: actionTypes.ITEM_REQUEST
});

const itemSuccess = (item) => ({
  type: actionTypes.ITEM_SUCCESS,
  payload: { item }
});

const itemFailure = (error) => ({
  type: actionTypes.ITEM_FAILURE,
  payload: { error }
});


export const itemAction = (token, id) => {
  
  return async (dispatch) => {  
    try {
      dispatch(itemRequest())
      let res = await itemGet(token, id);
      dispatch(itemSuccess(res.Data));
    } catch (e) {
      dispatch(itemFailure(e));
    }
  }
}

//marekova trojička end

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

export const addItemsAction = (token, page, filter = null) => {
  return async (dispatch) => {
    try {
      dispatch(addItemsRequest())
      let res = await itemsGet(token, page, filter);
      dispatch(setLoading());
      dispatch(addItemsSuccess(res.Data.Items));
      dispatch(setFinishedLoading());
    } catch (e) {
      dispatch(addItemsFailure(e));
    }
  }
}

const itemsStatesRequest = () => ({
  type: actionTypes.ADD_STATES_REQUEST
});

const itemsStatesSuccess = (states) => ({
  type: actionTypes.ADD_STATES_SUCCESS,
  payload: { states }
});

const itemsStatesFailure = (error) => ({
  type: actionTypes.ADD_STATES_FAILURE,
  payload: { error }
});

export const itemsStatesAction = (token) => {
  return async (dispatch) => {
    try {
      dispatch(itemsStatesRequest())
      let res = await itemsStatesGet(token);
      dispatch(itemsStatesSuccess(res.Data.Items));
    } catch (e) {
      dispatch(itemsStatesFailure(e));
    }
  }
}

export const changeStatesFilter = (filter) => {
  return (dispatch) => {
    dispatch(changePage(0))
    dispatch(changeStatesFilterSuccess(filter))
  }
}

const changeStatesFilterSuccess = filter => (
  {
    type: actionTypes.CHANGE_STATES_FILTER,
    payload: { filter }
  }
)

const setLoading = () => (
  {
    type: actionTypes.SET_LOADING
  }
)

const setFinishedLoading = () => (
  {
    type: actionTypes.SET_FINISHED_LOADING
  }
)

export const changePage = (page) => (
  {
    type: actionTypes.CHANGE_PAGE,
    payload: { page }
  }
)

export const changeSearchFilter = (search) => {
  return (dispatch) => {
    dispatch(changePage(0))
    dispatch(changeSearchFilterSucces(search))
  }
}

const changeSearchFilterSucces = search => (
  {
    type: actionTypes.CHANGE_SEARCH_FILTER,
    payload: { search }
  }
)
