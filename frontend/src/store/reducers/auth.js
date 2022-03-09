import {
  INSERT_AUTH_DATA,
  USER_LOGOUT
} from '../actions/authAction'

const initialState = {
  name: null,
  email: null,
  accessToken: null,
  isFetching: false,
  isFetched: false,
  isFailed: false
}

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case INSERT_AUTH_DATA:
      return {
        ...state,
        name: action.name,
        email: action.email,
        accessToken: action.accessToken,
        isFetching: false,
        isFetched: true,
      }
    case USER_LOGOUT:
      return initialState
    default:
      return state
  }
}
