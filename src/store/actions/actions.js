import axios from "axios";
import { setCookie } from "../../util/cookies";
import store from "../store";

export const userCreated = (data) => (dispatch) => {
  setAuthorizationHeader(data);
  window.location.href = "/";
  // dispatch({ type: "SET_UNAUTHENTICATED" });
};

export const logOutUser = () => (dispatch) => {
  localStorage.removeItem(`pf_at`);
  document.cookie = "pf_at=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  delete axios.defaults.headers.common[`Authorization`];
  dispatch({ type: "SET_UNAUTHENTICATED" });
  window.location.reload();
};

const setAuthorizationHeader = (token) => {
  const ffat = `Bearer ${token}`;
  setCookie("pf_at", token.token, 365);
  axios.defaults.headers.common["Authorization"] = ffat;
};
