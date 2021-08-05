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


export const itemsGet = async (token, page = 1) => {
    try {

        // fetch from server:

        // const response = await fetch(config.url + `/api/Requests?page=${page}`, {
        //     method: "GET",
        //     mode: "cors",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + token,
        //     }
        // });

        // const res = await response.json();

        //fetch from hardcoded json 
        const res = Data;
        // const data = [...Data];
        // for (let i = 0; i < 5; i++) {
        //     res.concat(data);
        //     console.log(res);
        //     return res
        // }
        const data = res.Data.Items;
        data.push(...data);
        data.push(...data);

        if (res.Code === '200.000') {
            return res;
        } else {
            throw new HttpError(res);
        }

    } catch (e) {
        throw e;
    }
}

