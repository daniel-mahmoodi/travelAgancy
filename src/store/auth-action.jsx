// loginRequest

import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export const loginRequest = (password, userName) => {
  return async (dispatch) => {
    const bodyFormData = new FormData();
    bodyFormData.append("Password", password);
    bodyFormData.append("UserName", userName);
    axios({
      method: "POST",
      url: `${apiUrl}/Account/LoginByUserNamePassword`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        //  setAddCode(true);
        //  setResponse(true);
        // setSendCodeAgain(true)
      })

      .catch(function (response) {
        //  setErrorInYourNumber(true);
        //  setResponse(true);
        //handle error
        // //console.log("error in catch of axios");
        console.log(response.response.data);
        
      });
  };
};
