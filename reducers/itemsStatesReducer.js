
import actionTypes from '../actions/actionTypes';

const itemsStates = (state = [], action) => {
    switch (action.type) {
           
        case actionTypes.ADD_STATES_SUCCESS: 
            return action.payload.states;
        default:
            return state;
    }

}

export default itemsStates;