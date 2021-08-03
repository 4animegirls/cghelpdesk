import actionTypes from '../actions/actionTypes';


const items = (state = [], action) => {
    switch(action.type){
        case actionTypes.ITEMS_SUCCESS:
            console.log(action.payload.items)
            return action.payload.items;
        default:
            return state;
    }

}

export default items;