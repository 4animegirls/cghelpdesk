import actionTypes from "../actions/actionTypes"

const statesFilter = (state = '', action) => {
    switch (action.type) {

    case actionTypes.CHANGE_STATES_FILTER:
        return action.payload.filter

    default:
        return state
    }
}

export default statesFilter