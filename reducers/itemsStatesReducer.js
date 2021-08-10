import { mostUsedStates } from '../config';

import actionTypes from '../actions/actionTypes';

const itemsStates = (state = mostUsedStates, action) => {
    switch (action.type) {
           
        case actionTypes.ADD_STATES_SUCCESS: 
            return action.payload.states;

        case actionTypes.REDUCE_ITEMS_STATES:
            return mostUsedStates

        default:
            return state;
    }

}

export default itemsStates;