import { loginPost } from '../utils'

export const addToken = (token) => ({
    type : 'ADD_TOKEN',
    payload: { token }
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN'
});


export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            let response = await loginPost(userLogin);
            response.Code==="200.000"? dispatch(loginSuccess(response)):  new Error('login returned ' + response.Code)
        } catch {
            loginFailure()
        }
    }
}

const loginRequest = () => ({
    type: 'LOGIN_REQUEST'
});

const loginSuccess = (response) => ({
    type: 'LOGIN_SUCCESS',
    payload: { response }
})

const loginFailure = () => {
    type : 'LOGIN_FAILURE'
}