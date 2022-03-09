import {
  FETCH_LOCALE_DATA_ERROR,
  FETCH_LOCALE_DATA_START,
  FETCH_LOCALE_DATA_SUCCESS,
} from "./localeAction"
import axiosInstance from "../../axiosInstance";

export function fetchLocaleData() {
  return async dispatch => {
    dispatch(fetchLocaleDataStart())
    try {
      await axiosInstance.get("/locales").then((res) => {
        dispatch(fetchLocaleDataSuccess(res.data))
      })
    } catch (e) {
      dispatch(fetchLocaleDataError(e))
    }
  }
}

export function fetchLocaleDataStart() {
  return {
    type: FETCH_LOCALE_DATA_START
  }
}

export function fetchLocaleDataSuccess(data) {
  return {
    type: FETCH_LOCALE_DATA_SUCCESS,
    i18n: data,
  }
}

export function fetchLocaleDataError(error) {
  return {
    type: FETCH_LOCALE_DATA_ERROR,
    error: error
  }
}