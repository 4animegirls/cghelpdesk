const status = (state = {theme: 'dark', token: null, page: 'login'}, action) => {
    switch(action.type){
        case 'ADD_USERNAME':
            return {...state, username: action.payload.username };

        case 'ADD_TOKEN':
            return {...state, token: action.payload.token};
        
        case 'CHANGE_THEME':
            return {...state, theme: action.payload.theme};

        case 'CHANGE_PAGE':
            return {...state, page: action.payload.page};

        default:
            return state;
    }

}

export default status;