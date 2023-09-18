import React, { useReducer, useState } from "react";
import MainModal from "./MainModal";
// import { CloseCircle } from "react-ionicons";
import { uiActions } from "../../store/Ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { sendUserNewCartData } from "../../store/cart-actions";

const initialState = {
  fullName: "",
  mobileNumber: "",
  factorId: "",
  emailAddress: "",
  residenceLocation: "",
  description: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    default:
      return state;
  }
};
const NewPaymentFormModal = () => {
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    localDispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: value,
    });
  };

  // console.log(state);
  const {
    fullName,
    mobileNumber,
    factorId,
    emailAddress,
    residenceLocation,
    description,
  } = state;
  const specs = {
    fullName,
    mobileNumber,
    factorId,
    emailAddress,
    residenceLocation,
    description,
  };

  const token = useSelector((state) => state.auth.token);
  const [fullNameError, setFullNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const UserInsertedDataHandler = () => {
    console.log("fullname", fullName);
    if (!fullName) {
      setFullNameError("لطفا نام خود را وارد کنید");
    }
    if (!mobileNumber) {
      setMobileNumberError("لطفا شماره موبایل خود را وارد کنید");
    }
    if (fullName && mobileNumber) {
      setFullNameError("");
      setMobileNumberError("");

      // ToggleUserHasCart
      console.log("userHasCart");
      // dispatch(cartActions.toggleUserHasCart())
      dispatch(sendUserNewCartData(token, specs));
    }
  };
  const hideNewPaymentModalHandler = () => {
    dispatch(uiActions.toggleNewPaymentModal());
  };
  return (
    <MainModal hideModalHandler={hideNewPaymentModalHandler}>
      <div
      // className="fixed top-0 left-0 w-full h-full bg-blue-50/30 z-30"
      // // style="z-index: 1000; overflow-y: scroll; display: none"
      // style={{
      //   // zIndex: 1000,
      //   overflowY: "scroll",
      //   display: "none",
      // }}
      // id="userInsertDataModal"
      >
        <div className="shadow-md border max-w-[500px] mx-auto p-4 my-8 rounded-md bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500">سبد خرید جدید</span>
            <button
              onClick={hideNewPaymentModalHandler}
              className="w-8 h-8 text-red-500"
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          </div>
          <hr />
          <div className="mt-8 text-center">مشخصات مشتری جدید</div>
          <div className="flex justify-between gap-8 mt-8">
            <div className="relative w-full">
              <input
                autoComplete="off"
                id="user-name"
                name="fullName"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-b-gray-400 text-gray-700 focus:outline-none focus:border-[#7887c0]"
                // style={{ placeholder: "transparent" }}
                placeholder="نام کامل"
                value={state.fullName}
                onChange={handleInputChange}
                required
              />
              <label
                htmlFor="user-name"
                className="absolute right-0 -top-3.5 text-gray-400  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:"
              >
                نام کامل *
              </label>

              {!fullName && (
                <div
                  id="username-error"
                  className="text-red-500 pt-1 text-[10px]"
                >
                  {fullNameError}
                </div>
              )}
            </div>
            <div className="relative w-full">
              <input
                autoComplete="off"
                id="phoneNumber"
                name="mobileNumber"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-b-gray-400 text-gray-700  focus:outline-none focus:border-[#7887c0]"
                placeholder="شماره موبایل"
                value={state.mobileNumber}
                onChange={handleInputChange}
              />
              <label
                htmlFor="phoneNumber"
                className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:"
              >
                شماره موبایل *
              </label>
              {!mobileNumber && (
                <div
                  id="phoneNumber-error"
                  className="text-red-500 pt-1  text-[10px]"
                >
                  {/* این شماره قبلا ثبت شده است ! */}
                  {mobileNumberError}
                </div>
              )}
            </div>
          </div>
          <div className="relative mx-auto mt-8">
            <input
              autoComplete="off"
              id="factor"
              name="factorId"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-b-gray-400 text-gray-700  focus:outline-none focus:border-[#7887c0]"
              placeholder="شماره فاکتور داخلی"
              value={state.factorId}
              onChange={handleInputChange}
            />
            <label
              htmlFor="factor"
              className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:"
            >
              شماره فاکتور داخلی
            </label>
            <div
              id="factor-error"
              className="text-red-500 pt-1 hidden text-[10px]"
            >
              شماره فاکتور اشتباه است !
            </div>
          </div>
          <div className="flex justify-between gap-8 mt-8">
            <div className="relative w-full">
              <input
                autoComplete="off"
                id="electro-post"
                name="emailAddress"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-b-gray-400 text-gray-700  focus:outline-none focus:border-[#7887c0]"
                placeholder="پست الکترونیک"
                value={state.emailAddress}
                onChange={handleInputChange}
              />
              <label
                htmlFor="electro-post"
                className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:"
              >
                پست الکترونیک
              </label>
              <div
                id="electro-post-error"
                className="text-red-500 pt-1 hidden text-[10px]"
              >
                ایمیل نامعتبر است !
              </div>
            </div>
            <div className="relative w-full">
              <input
                autoComplete="off"
                id="residence"
                name="residenceLocation"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-b-gray-400 text-gray-700  focus:outline-none focus:border-[#7887c0]"
                placeholder="محل اقامت "
                value={state.residenceLocation}
                onChange={handleInputChange}
              />
              <label
                htmlFor="residence"
                className="absolute right-0 -top-3.5 text-gray-400 text-[10px] peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:"
              >
                محل اقامت
              </label>
            </div>
          </div>
          <div className="relative mt-10 mb-3" data-te-input-wrapper-init>
            <textarea
              name="description"
              data-input-text
              className="peer block min-h-[auto] w-full rounded border-gray-300 focus:border-[#7887c0] border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
              value={state.description}
              onChange={handleInputChange}
            ></textarea>
            <label
              htmlFor="tw-elements"
              className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
            >
              توضیحات
            </label>
          </div>
          <div className="mt-8 text-center">
            <button
              className="px-5 py-2 text-white duration-200 bg-green-400 border border-green-400 rounded-md hover:text-black hover:bg-transparent"
              onClick={UserInsertedDataHandler}
            >
              ایجاد سبد خرید
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default NewPaymentFormModal;
