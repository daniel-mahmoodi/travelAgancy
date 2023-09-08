import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

import { baseURL, basics } from "../../../basics";
import AuthModal from "./AuthModal";
import logo from "../../../resources/images/app/ic_icon.png";
import iranFlag from "../../../resources/images/app/ir.svg";
import { uiActions } from "../../../store/Ui-slice";
import Loading from "../../Ui/Loading";
import Timer from "../../Ui/Timer";
import axios from "axios";

const AuthPopUpMenu = (props) => {
  const dispatch = useDispatch();

  const [enteredNumberSrc, setEnteredNumberSrc] = useState("");
  const [add, setAdd] = useState(true);
  const [addCode, setAddCode] = useState(false);
  const [response, setResponse] = useState(true);
  const [errorInYourCode, setErrorInYourCode] = useState(false);
  const [errorInYourNumber, setErrorInYourNumber] = useState(false);

  const codeInputRef = useRef < HTMLInputElement > null;
  const nameInputRef = useRef < HTMLInputElement > null;
  const FamilyNameInputRef = useRef < HTMLInputElement > null;
  const numberInputRef = useRef < HTMLInputElement > null;

  const sendUserToGiveCodeToVerifyHandler = (event) => {
    event.preventDefault();
    const enteredCode = codeInputRef.current.value;
    const bodyFormData = new FormData();
    bodyFormData.append("PhoneNumber", enteredNumberSrc);
    bodyFormData.append("Code", enteredCode);
    setResponse(false);
    axios({
      method: "post",
      url: `${baseURL}api/User/VerifyOtp`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        //console.log(response);
        const TokenReceived = response.data.token;
        if (TokenReceived) {
          // //console.log("Token", response.data.token);
          setResponse(true);
          // redux:
          dispatch(uiActions.toggleModal());
          dispatch(authActions.login(TokenReceived));
          dispatch(authActions.addPhoneNumber(enteredNumberSrc));
        } else {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "مشکل در احراز هویت شما.",
              message: "لطفا دوباره اقدان کنید",
            })
          );
        }
        // setAddCode(true);
      })
      .catch(function (err) {
        setErrorInYourCode(true);
        setResponse(true);
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "مشکل در در تایید کد ارسالی شما.",
            message: "لطفا دوباره اقدان کنید",
          })
        );
      });
  };
  const switchAuthModeHandler = () => {
    setAdd((prevState) => !prevState);
    setErrorInYourNumber(false);
    setResponse(true);
  };
  const backToAddHandler = () => {
    // setAdd((prevState) => !prevState);
    setAddCode((prevState) => !prevState);
    setErrorInYourCode(false);
    setErrorInYourNumber(false);
    setResponse(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // add
    //console.log("added");
    // const enteredName: string = nameInputRef.current!.value;
    const enteredNumber = numberInputRef.current.value;
    setEnteredNumberSrc(enteredNumber);

    const bodyFormData = new FormData();
    bodyFormData.append("PhoneNumber", enteredNumber);
    // bodyFormData.append("FirstName", enteredName);
    setResponse(false);
    axios({
      method: "post",
      url: `${baseURL}api/User/Add`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        //console.log(response);
        setAddCode(true);
        setResponse(true);
        // setSendCodeAgain(true)
      })
      // .then(function (response) {
      //   //handle success
      //   //console.log(response);
      //   const enteredCode: string = codeInputRef.current!.value;
      //   //console.log('enteredCode',enteredCode);
      // })
      .catch(function (response) {
        setErrorInYourNumber(true);
        setResponse(true);
        //handle error
        // //console.log("error in catch of axios");
        // //console.log(response);
      });
  };
  const sendCodeAgain = () => {
    //console.log("sendCodeAgain", enteredNumberSrc);

    const bodyFormData = new FormData();
    bodyFormData.append("PhoneNumber", enteredNumberSrc);
    // bodyFormData.append("FirstName", enteredName);
    setResponse(false);
    axios({
      method: "post",
      url: `${baseURL}api/User/Add`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        //console.log(response);
        setAddCode(true);
        setResponse(true);
        // setSendCodeAgain(true)
      })

      .catch(function (response) {
        setErrorInYourNumber(true);
        setResponse(true);
        //handle error
        // //console.log("error in catch of axios");
        // //console.log(response);
      });
  };
  return (
    <AuthModal onLoginClose={props.onHideLogin}>
      <div className="min-h-full flex items-center justify-center ">
        {addCode && (
          <div className="bg-white rounded w-96 space-y-8">
            <div>
              <img
                className="mx-auto my-3 h-12 w-auto"
                src={logo}
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {basics.addReceivedCode}
              </h2>
            </div>
            <form
              onSubmit={sendUserToGiveCodeToVerifyHandler}
              className="mt-8 mx-2 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="  -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    {basics.addReceivedCode}
                  </label>
                  <input
                    id="code"
                    ref={codeInputRef}
                    onChange={() => setErrorInYourCode(false)}
                    name="code"
                    type="code"
                    autoComplete="code"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-rose-600 focus:border-rose-600 focus:z-10 sm:text-sm"
                    placeholder={basics.addReceivedCode}
                  />
                </div>
                <div className="flex justify-center mt-1 pt-2 ">
                  <Timer sendCodeAgain={sendCodeAgain} />
                </div>
              </div>
              {/*  "کد وارد شده صحیح نمی باشد" */}
              {errorInYourCode && (
                <div className="text-rose-600 text-xs mx-2">
                  {basics.yourCodeIsNotCorrect}
                </div>
              )}

              <div>
                {response && (
                  <div className="flex justify-center items-center mx-auto">
                    <button
                      type="submit"
                      className=" relative  flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
                    >
                      {basics.accept}
                    </button>
                  </div>
                )}
                {!response && (
                  <div className="flex justify-center items-center mx-auto relative">
                    <div className=" relative  flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-rose-700 ">
                      {basics.accept}
                    </div>
                    <div className="absolute">
                      <Loading />
                    </div>
                  </div>
                )}

                <button
                  onClick={backToAddHandler}
                  className="group relative mx-auto my-4 flex justify-center py-2 px-4 border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
                >
                  <h2 className=" hover:text-gray-400">{basics.goBack}</h2>
                </button>
              </div>
            </form>
          </div>
        )}
        {!addCode && (
          <div className="bg-white rounded w-96 space-y-8">
            <div>
              <img
                className="mx-auto my-3 h-12 w-auto"
                src={logo}
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {!add ? `${basics.signUp}` : `${basics.signIn}`}
              </h2>
            </div>
            <form
              onSubmit={submitHandler}
              className="mt-8 mx-2 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className=" shadow-sm -space-y-px">
                {!add && (
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {basics.nameOfUser}
                    </label>
                    <input
                      id="name"
                      ref={nameInputRef}
                      name="name"
                      type="name"
                      autoComplete="name"
                      required
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-rose-600 focus:border-rose-600 focus:z-10 sm:text-sm"
                      placeholder={basics.nameOfUser}
                    />
                  </div>
                )}
                {!add && (
                  <div>
                    <label htmlFor="name" className="sr-only">
                      {basics.familyNameOfUser}
                    </label>
                    <input
                      id="familyName"
                      ref={FamilyNameInputRef}
                      name="familyName"
                      type="name"
                      autoComplete="familyName"
                      required
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-rose-600 focus:border-rose-600 focus:z-10 sm:text-sm"
                      placeholder={basics.familyNameOfUser}
                    />
                  </div>
                )}
                <div className="flex">
                  <div className="flex items-center w-16 px-1 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300  ">
                    <img src={iranFlag} className="w-6" alt="" />
                    <p>98+</p>
                  </div>
                  <label htmlFor="mobileNumber" className="sr-only">
                    {basics.phoneNumber}
                  </label>
                  <input
                    id="mobileNumber"
                    ref={numberInputRef}
                    name="mobileNumber"
                    type="tel"
                    autoComplete="current-mobileNumber"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-rose-600 focus:border-rose-600 focus:z-10 sm:text-sm"
                    placeholder={`${basics.phoneNumber}: ${basics.phoneNumberSample}`}
                  />
                </div>
                {/* شماره تلفن وارد شده صحیح نمی باشد */}
                {errorInYourNumber && (
                  <div className="text-rose-600 text-xs mx-2">
                    {basics.yourNumberIsNotCorrect}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  ></label>
                </div>
              </div>

              <div className="">
                <div className="flex justify-center items-center relative">
                  {response && (
                    <button
                      type="submit"
                      className="group relative  flex justify-center py-2 px-4 mx-auto border border-transparent text-sm font-medium rounded text-white bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
                    >
                      {`${basics.getCode}`}
                    </button>
                  )}
                  {!response && (
                    <div className="flex justify-center items-center relative">
                      <div
                        // type="submit"
                        className="group relative  flex justify-center py-2 px-4 mx-auto border border-transparent text-sm font-medium rounded text-white bg-rose-800 "
                      >
                        {`${basics.getCode}`}
                      </div>
                      <div className="absolute ">
                        <Loading />
                      </div>
                    </div>
                  )}
                </div>
                <h2 className="flex justify-center my-2">
                  {!add
                    ? `${basics.signInToProfileDescription}`
                    : `${basics.signUpDescription}`}
                </h2>
                <div
                  onClick={switchAuthModeHandler}
                  className="group cursor-pointer relative w-full underline text-rose-600 flex justify-center py-2 px-4 border border-transparent font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
                >
                  <h2 className="">
                    {add ? `${basics.signUp}` : `${basics.signInToProfile}`}
                  </h2>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </AuthModal>
  );
};

export default AuthPopUpMenu;
