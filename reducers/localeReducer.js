import actionTypes from '../actions/actionTypes';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const localization = (state = { locale: Localization.locale, localeUpdated: true }, action) => {
  switch (action.type) {
    case actionTypes.LOCALE_CHANGE:
      return { locale: action.payload, localeUpdated: false };
    
    case actionTypes.LOCALE_UPDATED:
      return { ...state, localeUpdated: true };

    default:
      return state;
  }

}

export default localization;