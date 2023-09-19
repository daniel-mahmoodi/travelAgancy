// loginRequest

import axios from "axios";
import { authActions } from "./auth-slice";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const loginRequest = (userName, password) => {
  return async (dispatch) => {
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
      })

      .catch(function (response) {
        console.log(response);
      });
  };
};
export const signUpRequest = (userData) => {
  return async (dispatch) => {
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
        console.log("error", response.response.data);
      });
  };
};
