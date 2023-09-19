// loginRequest

import axios from "axios";
import { authActions } from "./auth-slice";
import { uiActions } from "./Ui-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const loginRequest = (userName, password) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();
    bodyFormData.append("UserName", userName);
    bodyFormData.append("Password", password);
    console.log("login form", bodyFormData, userName, password, apiUrl);
    axios({
      method: "POST",
      url: `${apiUrl}/Account/LoginByUserNamePassword`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        dispatch(authActions.login(response.data.token));
        console.log("response", response);
        dispatch(authActions.toggleAuthLoading(false));
        dispatch(
          uiActions.toggleSuccessModal({
            show: true,
            desc: `${userName} خوش آمدید!`,
          })
        );
        // dispatch(uiActions.showWarning('asda'))
      })

      .catch(function (response) {
        console.log(response);
        dispatch(authActions.toggleAuthLoading(true));
        setTimeout(() => {
          dispatch(authActions.toggleAuthLoading(false));
        }, 2000);
        dispatch(uiActions.showWarning(response.response.data));
      });
  };
};
export const signUpRequest = (userData) => {
  return async (dispatch) => {
    dispatch(authActions.toggleAuthLoading(true));
    const bodyFormData = new FormData();
    bodyFormData.append("Password", userData.password);
    bodyFormData.append("UserName", userData.userName);
    bodyFormData.append("FirstName", userData.firstName);
    bodyFormData.append("LastName", userData.lastName);
    axios({
      method: "POST",
      url: `${apiUrl}/Account/RegisterByUserName`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);

        dispatch(loginRequest(userData.userName, userData.password));
      })

      .catch(function (response) {
        dispatch(authActions.toggleAuthLoading(true));
        console.log("error", response.response);
        setTimeout(() => {
          dispatch(authActions.toggleAuthLoading(false));
        }, 2000);
        dispatch(uiActions.showWarning(response.response.data));
      });
  };
};
