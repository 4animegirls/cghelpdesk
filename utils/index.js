import config from '../config';
import { HttpError } from '../utils/httperror';
import Data from '../data.json'

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
     if( filter!== null ){
       switch(filter[0]){
         case 'Id':
           filter = `{"logic":"and","filters":[{"field":"State.Id","operator":"eq","value":${filter[1]}}]}`
           break;
         case 'Name':
           filter = `{"logic":"and","filters":[{"field":"Name","operator":"contains","value":${filter[1]}}]}`
           break;
         case 'Solver':
           filter = `{"logic":"and","filters":[{"field":"CurrentSolver","operator":"contains","value":${filter[1]}}]}`
           break;
         default:
           filter = null
           break;

       }

     }
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

