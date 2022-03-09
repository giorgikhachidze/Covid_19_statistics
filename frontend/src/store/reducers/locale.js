import {
  FETCH_LOCALE_DATA_ERROR,
  FETCH_LOCALE_DATA_START,
  FETCH_LOCALE_DATA_SUCCESS,
} from "../actions/localeAction";

const initialState = {
  i18n: null,
  isFetching: false,
  isFetched: false,
  isFailed: false
}

export default function LocaleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCALE_DATA_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_LOCALE_DATA_SUCCESS:
      return {
        ...state,
        i18n: action.i18n,
        isFetching: false,
        isFetched: true,
      }
    case FETCH_LOCALE_DATA_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        isFailed: true
      }
    default:
      return state
  }
}
