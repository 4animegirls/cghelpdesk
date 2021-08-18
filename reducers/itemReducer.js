import actionTypes from '../actions/actionTypes';

const item = (state = null, action) => {
  switch (action.type) {
    case actionTypes.ITEM_SUCCESS:
      return  action.payload.item 

    default:
      return state;
  }

}

export default item;