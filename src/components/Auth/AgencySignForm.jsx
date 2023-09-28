import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import MyLoading from "../Layout/MyLoading";
import { useDispatch, useSelector } from "react-redux";
import { insertAgency } from "../../store/auth-action";

const initialState = {
  TitleFa: "",
  TitleEn: "",
  FirstName: "",
  LastName: "",
  Mobile: "",
  PhoneNumber: "",
  SecondPhoneNumber: "",
  ShabaNumber: "",
  CardNumber: "",
  AccountNumber: "",
  BankName: "",
  CityId: "",
  Email: "",
  Website: "",
  CertificateImage: null,
  AgencyLogoImage: null,
  IdentificationCardImage: null,
  AgencyType: "",
  Address: "",
  IdentitifcationCode: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    case "UPDATE_FILE":
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    default:
      return state;
  }
};
const AgencySignForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [state, localDispatch] = useReducer(reducer, initialState);
  const showNewCartLoading = useSelector(
    (state) => state.cart.showNewCartLoading
  );
  const handleFileSelected = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    // console.log('name and value for img',name,event.target.files[0]);
    localDispatch({
      type: "UPDATE_FILE",
      fieldName: name,
      payload: file,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("name, value in text type", name, value);
    localDispatch({
      type: "UPDATE_FIELD",
      fieldName: name,
      payload: value,
    });
  };
  // 1:company: شرکت خدمات گردشگری
  // 2:office: دفتر خدمات گردشگری
  const handleUserInsertedData = (event) => {
    event.preventDefault();
    console.log("handleUserInsertedData", token, state);
    dispatch(insertAgency(state, token));
  };
  console.log("TitleFa", state);
  return (
    <div className="bg-white border-0 main-content md:shadow-md md:border bg-opacity-98">
      <div>
        <h4 className="flex items-center gap-2 py-4 font-medium text-blue-950">
          <ion-icon class="h-6 w-6" name="document-text-outline"></ion-icon>
          فرم درخواست ساین
        </h4>
        <hr />
        <div className="mt-10">
          <div className="bg-white shadow-md rounded-md p-4 border border-gray-200">
            <p className="p-3 align-icon">
              <ion-icon
                class="text-red-500"
                name="alert-circle-outline"
              ></ion-icon>
              توجه فرمایید
            </p>
            {/* <hr> */}
            <p className="p-4 text-[14px]">
              کامل کردن تمامی آتیم های فرم الزامی می باشد . اطلاعات کاربری
              (سایت) اراائه شده متعلق به آژانس می باشد و شرکت تاکیش در خصوص
              عواقب ناشی از سوء استفاده از آن مسئولیتی جهت امینیت بیشتر رمز عبور
              خود را بصورت دوره ای تغییر دهید . اطلاعات کاربری (سایت) شما پس از
              برسی از طریق ایمیل برای شما ارسال خواهد شد . آژانس موظف است در
              صورت تغییر مسئول ساین ، شرکت ارائه دهنده را کتبا مطلع نماید .
            </p>
          </div>
          {/* <!-- title --> */}
          <p className="align-icon text-blue-950 mt-10">
            <ion-icon name="information-circle-outline"></ion-icon>
            اطلاعات :
          </p>
          <form className="mt-10" action="">
            {/* <!-- rooms and customer's information --> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-10">
            <div class="relative mb-3" data-te-input-wrapper-init>
                    <input type="text"
                      className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                      data-input-text
                      required/>
                    <label for="exampleFormControlInputText"
                      className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ">
                      نام کامل آژانس
                    </label>
                   
                  </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  id="peerFormControlInputText"
                  name="TitleFa"
                  className="peer placeholder-transparent text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  value={state.TitleFa}
                  onChange={handleInputChange}
                  required
                  placeholder="نام آژانس"
                />
                <label
                  htmlFor="peerFormControlInputText"
                  className={`pointer-events-none absolute right-3 group -top-10 peer-placeholder-shown:top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out`}
                >
                  نام کامل آژانس
                </label>
              </div>
              {/* <!-- second iput starts here --> */}
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="TitleEn"
                  className="peer placeholder-transparent text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  value={state.TitleEn}
                  onChange={handleInputChange}
                  required
                />
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0 peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  نام انگلیسی آژانس
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.FirstName}
                  onChange={handleInputChange}
                  name="FirstName"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="person-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  نام مدیر عامل
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.LastName}
                  onChange={handleInputChange}
                  name="LastName"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="person-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  نام خانوادگی مدیر عامل
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.IdentitifcationCode}
                  onChange={handleInputChange}
                  name="IdentitifcationCode"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  شماره ملی مدیر عاملIdentitifcationCode
                </label>
                {/* </span> */}
              </div>
              <div className="bg-white border relative max-w-[700px] mx-auto border-gray-200 shadow-md rounded-md p-4 mt-2 mb-2">
                <p className=" text-[14px] leading-7 ">
                  {/* لطفا در جدول زیر اطلاعات فرد مسئول در خصوص پشتیبانی مسافران
                  آژانس را وارد نمایید . این اطلاعاتبرای ساخت پنل کاربری آژانش
                  لحاظ می گردد. لذ اترجیحا موبایل و ایمیل آژانس در ج شود تا
                  دسترسی برای آژانس محفوظ بماند . */}
                  لطفا در جدول زیر شماره موبایل فرد مسئول در خصوص پشتیبانی
                  مسافران آژانس را به درستی وارد نمایید. این اطلاعات برای ساخت
                  پنل کاربری آژانش لحاظ می گردد.
                </p>
                <ion-icon
                  class="text-red-500 absolute top-[5px] left-[4px]"
                  name="alert-circle-outline"
                ></ion-icon>
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.Mobile}
                  onChange={handleInputChange}
                  name="Mobile"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  شماره همراه مدیر عامل
                </label>
                {/* </span> */}
              </div>

              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                     <input type="text"
                     onChange={handleInputChange}
                     name=''
                       className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                       data-input-text
                       required
                       />
                       
                     <label htmlFor="exampleFormControlInputText"
                       className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ">
                     دارای مجوز بند :
                     </label>
                   </div> */}

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.PhoneNumber}
                  onChange={handleInputChange}
                  name="PhoneNumber"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="call-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  تلفن آژانس
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.SecondPhoneNumber}
                  onChange={handleInputChange}
                  name="SecondPhoneNumber"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="call-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  تلفن دوم آژانس
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.ShabaNumber}
                  onChange={handleInputChange}
                  name="ShabaNumber"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  شماره شبا
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.CardNumber}
                  onChange={handleInputChange}
                  name="CardNumber"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  شماره کارت
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.AccountNumber}
                  onChange={handleInputChange}
                  name="AccountNumber"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  {/* شماره ملی مدیر عامل */}
                  Account number
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.BankName}
                  onChange={handleInputChange}
                  name="BankName"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  اسم بانک
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.CityId}
                  onChange={handleInputChange}
                  name="CityId"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="business-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  کد پستی
                </label>
                {/* </span> */}
              </div>
              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.}
                  onChange={handleInputChange}
                  name='Address'
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  آدرس آژانس
                </label>
              </div> */}
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.Email}
                  onChange={handleInputChange}
                  name="Email"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="at-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  پست الکترونیکی آژانس
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.Website}
                  onChange={handleInputChange}
                  name="Website"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  وبسایت
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="file"
                  // value={state.CertificateImage}
                  onChange={handleFileSelected}
                  name="CertificateImage"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  // data-input-text
                  // required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  CertificateImage
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="file"
                  name="AgencyLogoImage"
                  // value={state.AgencyLogoImage}
                  className=" text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                  placeholder="لوگو"
                  //  ref={avatarInputRef}
                  //  style={{ display: "none" }}
                  onChange={handleFileSelected}
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  لوگوی آژانس
                </label>
                {/* </span> */}
              </div>

              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="file"
                  // value={state.IdentificationCardImage}
                  onChange={handleFileSelected}
                  name="IdentificationCardImage"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  IdentificationCardImage
                </label>
                {/* </span> */}
              </div>
              <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.AgencyType}
                  onChange={handleInputChange}
                  name="AgencyType"
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />

                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0  peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  AgencyType
                </label>
                {/* </span> */}
              </div>

              {/* <div className="relative mb-3" data-te-input-wrapper-init>
                <input
                  type="text"
                  value={state.}
                  onChange={handleInputChange}
                  name=''
                  className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                  data-input-text
                  required
                />
                <ion-icon class="input-icon" name="calendar-outline"></ion-icon>
                <label
                  htmlFor="exampleFormControlInputText"
                  className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out "
                >
                  تاریخ اعتبار مجوز
                </label>
              </div> */}

              {/* </div> */}
            </div>

            {/* <!-- address box --> */}
            <div className="relative mt-10 mb-3" data-te-input-wrapper-init>
              <textarea
                className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100 "
                id="exampleFormControlTextarea1"
                name="Address"
                rows="5"
                required
                data-input-text
                value={state.Address}
                onChange={handleInputChange}
              ></textarea>
              <label
                htmlFor="tw-elements"
                className="pointer-events-none absolute right-3 top-0 peer-focus:-top-10 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
              >
                آدرس محل قانونی شرکت
              </label>
            </div>

            {/* <!-- ========= --> */}

            <div className="text-[12px] text-red-500 mt-10 ">
              کامل کردن تمامی آیتم ها الزامی است !
            </div>
            {/* <!-- seach button accroding to the above information --> */}
            <div className="flex justify-end mt-10">
              <button onClick={handleUserInsertedData} className="search-btn">
                {showNewCartLoading ? <MyLoading /> : "تایید"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgencySignForm;
