const status = (state = {theme: 'dark', user: {token: null, username: ''}, page: 'login'}, action) => {
    switch(action.type){
        case 'ADD_USERNAME':
            return {...state, user:{username: action.payload.username} };

        case 'ADD_TOKEN':
            return {...state, user:{token: action.payload.token}};

        case 'REMOVE_TOKEN':
            return {...state, user:{token: null}};
        
        case 'CHANGE_THEME':
            return {...state, theme: action.payload.theme};

        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        case 'LOGIN_SUCCESS':
            console.log(action.payload.response)
            return {...state, user:{token: action.payload.response.Token}};

        default:
            return state;
    }

}

export default status;