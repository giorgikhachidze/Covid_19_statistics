import {
  FETCH_STATISTIC_DATA_ERROR,
  FETCH_STATISTIC_DATA_START,
  FETCH_STATISTIC_DATA_SUCCESS,
} from "../actions/statisticAction";

const initialState = {
  data: null,
  isFetching: false,
  isFetched: false,
  isFailed: false
}

export default function StatisticReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATISTIC_DATA_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_STATISTIC_DATA_SUCCESS:
      console.log(action.statistic)
      return {
        ...state,
        data: action.statistic,
        isFetching: false,
        isFetched: true,
      }
    case FETCH_STATISTIC_DATA_ERROR:
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
