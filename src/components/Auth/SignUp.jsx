import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUpRequest } from "../../store/auth-action";
import MyLoading from "../Layout/MyLoading";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showUserPass, setShowUserPass] = useState(false);
  const showLoading = useSelector((state) => state.auth.authLoading);
  const addUserNameInputHandler = (e) => {
    // console.log('addUserNameInputHandler',e.target.value);
    setUserName(e.target.value);
  };
  const addPasswordInputHandler = (e) => {
    // console.log('addPasswordInputHandler',e.target.value);
    setPassword(e.target.value);
  };
  const addFirstNameInputHandler = (e) => {
    // console.log('addPasswordInputHandler',e.target.value);
    setFirstName(e.target.value);
  };
  const addLastNameInputHandler = (e) => {
    // console.log('addPasswordInputHandler',e.target.value);
    setLastName(e.target.value);
  };
  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    // dispatch(authActions.login(token))
    if (userName) {
      setUserNameError(false);
    } else {
      setUserNameError(true);
    }
    if (password) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (password && userName) {
      console.log("loginSubmitHandler");
      const userData = { firstName, lastName, userName, password };
      dispatch(signUpRequest(userData));
    }
  };
  return (
    <div className="container mx-auto">
      {/* <!-- component --> */}
      <form onSubmit={signUpSubmitHandler} action="">
        <div className="flex flex-col justify-center min-h-screen py-6 sm:py-12 sm:px-10">
          <div className="relative px-10 py-3 sm:mx-auto">
            <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-rose-200 to-rose-50 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white border rounded-md shadow-lg sm:rounded-3xl sm:p-20">
              <div className="min-w-[300px] lg:min-w-[400px] mx-auto">
                <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                  <img
                    className="w-[40px]"
                    src="../img/Tailwind_CSS_Logo.svg.png"
                    alt=""
                  />
                  <p className="text-[12px] font-bold text-gray-400">
                    ثبت نام کاربر
                  </p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="px-12 py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="user-name"
                        name="username"
                        type="text"
                        className=" h-10 w-full border-b-2 border-gray-300 text-rose-700 text-[12px] focus:outline-none focus:borer-rose-600"
                        placeholder="username"
                        onChange={addUserNameInputHandler}
                      />
                      <ion-icon
                        class="absolute text-gray-500 left-[5px] top-[10px]"
                        name="person-outline"
                      ></ion-icon>
                      <label
                        htmlFor="email"
                        className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-[12px]"
                      >
                        نام کاربری
                      </label>
                      {userNameError && (
                        <div
                          id="username-error"
                          className="text-red-500 pt-1 hidden text-[10px]"
                        >
                          {/* این نام کاربری قبلا ثبت شده است ! */}
                          نام کاربری خود را وارد کنید
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="f-name"
                        name="first-name"
                        type="text"
                        className=" h-10 w-full border-b-2 border-gray-300 text-[12px] text-gray-700 focus:outline-none focus:borer-rose-600"
                        placeholder="first-name"
                        onChange={addFirstNameInputHandler}
                      />
                      <label
                        htmlFor="f-name"
                        className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-[12px]"
                      >
                        نام
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="l-name"
                        name="last-name"
                        type="text"
                        className=" h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[12px] focus:outline-none focus:borer-rose-600"
                        placeholder="last-name"
                        onChange={addLastNameInputHandler}
                      />
                      <label
                        htmlFor="l-name"
                        className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-[12px]"
                      >
                        نام خانوادگی
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type={showUserPass ? "text" : "password"}
                        className=" h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[12px] focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        onChange={addPasswordInputHandler}
                      />
                      <ion-icon
                        onClick={() => setShowUserPass((prev) => !prev)}
                        class="absolute text-gray-500 left-[5px] top-[10px] cursor-pointer"
                        name="eye-outline"
                      ></ion-icon>
                      <label
                        htmlFor="password"
                        className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-[12px]"
                      >
                        رمزعبور
                      </label>
                      {passwordError && (
                        <div
                          id="password-error"
                          className="text-red-500 pt-1 text-[10px]"
                        >
                          رمز عبور باید حداقل شامل 12 حرف بزرگ، کوچک و اعداد
                          باشد !
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-3 mb-4">
                      <input
                        style={{ accentColor: "green" }}
                        type="checkbox"
                        id="checkbox"
                      />
                      <label
                        className="text-gray-500 text-[12px]"
                        htmlFor="checkbox"
                      >
                        مرا به خاطر بسپار
                      </label>
                    </div>

                    <div className="flex justify-center pt-5">
                      <button className="w-full px-3 py-1 text-white duration-200 border rounded-md bg-secondary-500 border-secondary-400 hover:bg-transparent hover:text-secondary-500">
                        {showLoading ? <MyLoading /> : "ثبت نام"}
                      </button>
                    </div>
                  </div>
                  <div className="py-3">
                    <button className="px-3 py-1 text-white duration-200 border rounded-md bg-secondary-500 border-secondary-400 hover:bg-transparent hover:text-secondary-500 text-[10px]">
                      <ion-icon
                        name="arrow-back-outline"
                        class="relative top-1"
                      ></ion-icon>
                      ورود با رمزعبور یکبار مصرف
                    </button>
                    <div className="py-3">
                      <button className="cursor-pointer flex items-center ap-1 pr-3 text-gray-500 text-[10px]">
                        قبلا ثبت نام کرده اید ؟
                        <Link
                          className="px-3 py-1 mr-2 text-white duration-200 border rounded-md bg-secondary-500 border-secondary-400 hover:bg-transparent hover:text-secondary-500"
                          to="/login-form"
                        >
                          وارد شوید
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
