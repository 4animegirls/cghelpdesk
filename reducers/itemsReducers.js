import actionTypes from '../actions/actionTypes';


const items = (state = [], action) => {
    switch(action.type){
        case ITEMS_SUCCESS:
            return action.payload.items;
        default:
            return state;
    }

}

export default items;