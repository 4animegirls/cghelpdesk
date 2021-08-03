import config from '../config';
import { HttpError } from '../utils/httperror';

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


export const itemsGet = async (token) => {
    try {
        const response = await fetch(config.url + '/api/Requests', {
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
        } else {
            throw new HttpError(res);
        }

    } catch (e) {
        throw e;
    }
} 

