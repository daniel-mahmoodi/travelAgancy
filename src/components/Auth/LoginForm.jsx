
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/auth-action";
import { Link } from "react-router-dom";
import MyLoading from "../Layout/MyLoading";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showUserPass, setShowUserPass] = useState(false);
  const showLoading = useSelector((state) => state.auth.authLoading);
  // console.log("showLoading", showLoading);
  const addUserNameInputHandler = (e) => {
    setUserName(e.target.value);
  };
  const addPasswordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
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
      dispatch(loginRequest(userName, password));
    }
  };

  return (
    <div className="container mx-auto">
      <form action="" onSubmit={loginSubmitHandler}>
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 sm:px-10">
          <div className="relative py-3 px-10 sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white border rounded-md shadow-lg sm:rounded-3xl sm:p-20">
              <div className="min-w-[300px] lg:min-w-[400px] mx-auto">
                <div className="flex justify-center mb-10 flex-col text-center items-center gap-4">
                  <img
                    className="w-[40px]"
                    src="../img/Tailwind_CSS_Logo.svg.png"
                    alt=""
                  />
                  <p className="text-[12px] font-bold text-gray-400">
                    ورود به حساب کاربری
                  </p>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base px-12 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="user-name"
                        name="username"
                        type="text"
                        className=" h-10 w-full border-b-2 border-gray-300 text-gray-700 text-[12px] focus:outline-none focus:border-rose-600"
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
                          className="text-red-500 pt-1 text-[10px]"
                        >
                          لطفا نام کاربری را به درستی وارد نمایید !
                        </div>
                      )}
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
                        class="absolute text-gray-500 left-[5px] top-[10px]"
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
                          رمز عبور خود را به درستی وارد نمایید !
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-3 pt-3 mb-4">
                      <input
                        className="accent-green-500"
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

                    <div className="flex justify-center items-center pt-5">
                      <button className="bg-green-500 text-[15px] text-white rounded-md px-20 border border-green-500 hover:bg-transparent hover:text-gray-500 duration-300 py-1">
                        {showLoading ? <MyLoading /> : "ورود"}
                      </button>
                    </div>
                  </div>
                  <div className="py-3">
                    <button className="cursor-pointer flex items-center bg-blue-400 p-2 text-white border border-blue-500 hover:bg-transparent hover:text-gray-700 rounded-md duration-300 gap-1 text-[10px]">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                      ورود با رمزعبور یکبار مصرف
                    </button>
                    <div className="py-3">
                      <button className="cursor-pointer flex items-center ap-1 pr-3 text-gray-500 text-[10px]">
                        حساب ندارید؟
                        <Link
                          className="text-green-500 px-1 hover:underline duration-200"
                          to="/sign-up"
                        >
                          ثبت نام کنید
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

export default LoginForm;
{
  /* <!-- </body>
</html> --> */
}
