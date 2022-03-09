import store from "./store/index";

export function isLoggedIn() {
    return !!store.getState().auth.accessToken;
}
