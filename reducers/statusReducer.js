const status = (state = {theme: 'dark', user: {Token: null, username: ''}, page: 'login'}, action) => {
    switch(action.type){
        case 'ADD_USERNAME':
            return {...state, user:{username: action.payload.username} };

        case 'ADD_TOKEN':
            return {...state, user:{Token: action.payload.token}};

        case 'REMOVE_TOKEN':
            return {...state, user:{Token: null}};
        
        case 'CHANGE_THEME':
            return {...state, theme: action.payload.theme};

        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        case 'LOGIN_SUCCESS':
            console.log(action.payload.response.Data)
            return {...state, user:{Token: action.payload.response.Data.Token, refreshToken: action.payload.response.Data.refreshToken}};

        default:
            return state;
    }

}

export default status;