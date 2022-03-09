import {
  INSERT_AUTH_DATA,
  USER_LOGOUT
} from "./authAction"
import axiosInstance from "../../axiosInstance";

export function logout() {
  return async dispatch => {
    try {
      await axiosInstance.delete("/logout").then(() => {
        dispatch({
          type: USER_LOGOUT,
        })
      })
    } catch (e) {
      dispatch({
        type: USER_LOGOUT,
      })
    }
  }
}

export function insertAuthData(data) {
  return {
    type: INSERT_AUTH_DATA,
    name: data.name,
    email: data.email,
    accessToken: data.access_token,
  }
}
