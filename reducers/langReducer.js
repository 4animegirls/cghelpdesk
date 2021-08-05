import actionTypes from '../actions/actionTypes';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const localization = (state = { locale: Localization.locale }, action) => {
  switch (action.type) {
    case actionTypes.LOCALE_CHANGE:
      
      return state;

    default:
      return state;
  }

}

export default localization;