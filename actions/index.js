import { Login } from '../utils'

export const addToken = (token) => ({
    type : 'ADD_TOKEN',
    payload: { token }
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN'
});


export const login = (userLogin) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest())
            let response = await login(userLogin);
            dispatch(loginSuccess(response))
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