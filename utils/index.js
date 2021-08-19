import config from '../config';
import { HttpError } from '../utils/httperror';
import Data from '../data.json'
import filterChange from './filterChange';

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


export const itemsGet = async (token, page = 1, filter) => {
  try {
    filter = filterChange(filter); 
    console.log(filter);

     const response = await fetch(config.url + `/api/Requests?page=${page}&filter=${filter}`, {
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
    } else if (res.Code === '404.000') {
      return {...res, Data:{ Items: null} } 
    }
    else {
      throw new HttpError(res);
    }


  } catch (e) {
    throw e;
  }
}

//marekovo itemGet

export const itemGet = async (token,id) => {
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
      return {...res, Data:{ Item: null} } 
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

