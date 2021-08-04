import actionTypes from '../actions/actionTypes';


const items = (state = {items: [], page:1}, action) => {
    switch(action.type){
        case actionTypes.ITEMS_SUCCESS:
            return {...state, items: action.payload.items}
        case actionTypes.ADD_PAGE:
            return {...state, page: state.page+1}
        
        case actionTypes.ADD_ITEMS_SUCCESS:
            return {...state, items: [...state.items, action.payload.items]}
        
        default:
            return state;
    }

}

export default items;