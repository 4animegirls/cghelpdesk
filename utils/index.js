import config from '../config';
import { HttpError } from '../utils/httperror';
import filterChange from './filterChange';
import { addToken, logout } from '../actions';
import { store } from '../App';

export const loginPost = async (userLogin) => {
  try {
    const response = await fetch(config.url + '/api/Login', {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLogin)
    });

    const res = await response.json();
    if (res.Code === '200.000') {
      return res;
    } else {
      throw new HttpError(res);
    }

  } catch (e) {
    throw e;
  }
}


export const itemsGet = async (token, page = 1, filter, refresh = false) => {
  try {
    let newfilter = filterChange(filter);

    const response = await fetch(config.url + `/api/Requests?page=${page}&filter=${newfilter}`, {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });

    let res = await response.json();
    if (!refresh) {
      switch(res.Code) {
        case '200.000':
          return res;

        case '404.000': 
          return { ...res, Data: { Items: null } }

        case '401.000': {
          const state = store.getState();
          let refreshResponse = await refreshLogin(state.user.refreshToken);

          if (refreshResponse.Code === '200.000') {
            store.dispatch(addToken(refreshResponse.Data.Token, refreshResponse.Data.RefreshToken));
            return res = await itemsGet(refreshResponse.Data.Token, page, filter, true);
            }
          }

        default:
          throw new HttpError(res);
      }
    } else {
      if(res.Code === '401.000'){
        state.dispatch(logout())
      } else return res
    }


  } catch (e) {
    console.log(e);

    throw e;
  }
}


//marekovo itemGet

export const itemGet = async (token, id) => {
  try {
    const response = await fetch(config.url + `/api/Requests/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });
    const res = await response.json();

    if (res.Code === '200.000') {
      return res;
    } else if (res.Code === '404.000') {
      return { ...res, Data: { Item: null } }
    }
    else {
      throw new HttpError(res);
    }


  } catch (e) {
    throw e;
  }
}

//marekovo itemGet koniec

export const itemsStatesGet = async (token) => {
  try {
    const response = await fetch(config.statesUri + `/api/reference/States?limit=100`, {
      method: "GET",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    });

    const res = await response.json();

    if (res.Code === '200.000') {
      return res;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}


export const refreshLogin = async (refreshToken) => {
  try {

    const response = await fetch(config.url + `/api/Login/Refresh`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + refreshToken,
      }
    });

    const res = await response.json();

    if (res.Code === '200.000') {
      return res;
    } else if (res.Code === '401.000') {
      return null;
    }
    else {
      throw new HttpError(res);
    }


  } catch (e) {
    throw e;
  }
}