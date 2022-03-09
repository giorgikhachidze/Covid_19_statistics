import {
  FETCH_STATISTIC_DATA_ERROR,
  FETCH_STATISTIC_DATA_START,
  FETCH_STATISTIC_DATA_SUCCESS,
} from "./statisticAction"
import axiosInstance from "../../axiosInstance";

export function fetchStatisticData(column, direction, search) {
  return async dispatch => {
    dispatch(fetchStatisticDataStart())
    try {
      await axiosInstance.get("/statistics/filter").then((res) => {
        dispatch(fetchStatisticDataSuccess(res.data.data))
      })
    } catch (e) {
      dispatch(fetchStatisticDataError(e))
    }
  }
}

export function fetchStatisticDataStart() {
  return {
    type: FETCH_STATISTIC_DATA_START
  }
}

export function fetchStatisticDataSuccess(data) {
  return {
    type: FETCH_STATISTIC_DATA_SUCCESS,
    statistic: data,
  }
}

export function fetchStatisticDataError(error) {
  return {
    type: FETCH_STATISTIC_DATA_ERROR,
    error: error
  }
}
