import actionTypes from "../actions/actionTypes"

const searchFilter = (state = ['', ''], action) => {
    switch (action.type) {

    case actionTypes.CHANGE_SEARCH_FILTER:
        return action.payload.search

    default:
        return state
    }
}

export default searchFilter