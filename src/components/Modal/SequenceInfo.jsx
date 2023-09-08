import React from "react";
import MainModal from "./MainModal";

import { uiActions } from "../../store/Ui-slice";
import { useDispatch } from "react-redux";

const SequenceInfo = () => {
  const dispatch = useDispatch();
  const hideSansModal = () => {
    dispatch(uiActions.toggleSequenceModal());
    console.log("hideSansModal");
  };
  console.log("sequence");
  const hideSequenceModalHandler = () => {
    dispatch(uiActions.toggleSequenceModal());
  };
  return (
    <MainModal hideModalHandler={hideSequenceModalHandler}>
      <div
      //   className="fixed top-0 left-0 w-full h-full bg-blue-50/30 z-30"
      //   //  style="z-index: 1000; overflow-y: scroll; display: none"
      style={{
          zIndex: 1000,
      // overflowY: "scroll",
      //     display: "none",
      }}
      //   id="selectSansModal"
      >
        <div className="shadow-md max-w-[1200px] mx-auto rounded-md border p-4 bg-white mt-10">
          <div className="flex items-center justify-between mb-5">
            <p className="font-bold">رستوران صفدری ساحلی</p>
            <div>
              <button onClick={hideSansModal}>
                <ion-icon
                  className="w-8 h-8 text-red-500"
                  name="close-circle-outline"
                ></ion-icon>
              </button>
              <button>
                <ion-icon
                  className="w-8 h-8 bg-[#4576ef] rounded-full text-white"
                  name="refresh-circle-outline"
                ></ion-icon>
              </button>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-5 mt-10">
            <ol
              className="relative mt-8 mr-8 border-r border-gray-500"
              id="sansList"
            >
              <li className="mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hidden mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hidden mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hidden mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hidden mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hidden mb-2 mr-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                  </svg>
                </span>
                <div className="flex w-full">
                  <h3 className="relative flex-shrink-0 mb-3 text-sm font-bold text-gray-700 top-[4px] w-[150px]">
                    پنجشبه 16 شهریور 1402
                  </h3>
                  <div className="w-[2000px] relative top-[-10px]">
                    <div className="flex justify-between w-full">
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-orange-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                      <button className="p-2 text-sm border rounded-md w-[calc(50%-2px)]">
                        سانس شام 10 - 20
                        <span className="inline-block p-1 mr-2 text-xs text-white bg-green-600 rounded-md relative top-[-2px]">
                          20
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
            <button
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-green-400 rounded-md"
              id="more"
            >
              بیشتر
            </button>
          </div>
          <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-100 uppercase border-b bg-blue-950">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    عنوان
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ظرفیت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    خرید
                  </th>
                  <th scope="col" className="px-6 py-3">
                    کمیسیون
                  </th>
                  <th scope="col" className="px-6 py-3">
                    مبلغ بلیط
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-opacity-30 text-gray-950 bg-blue-50 hover:bg-blue-100 hover:bg-opacity-30">
                  <td className="px-6 py-4">اکونومی | ECG</td>
                  <td className="px-6 py-4">
                    <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                      10
                    </span>
                  </td>
                  <td className="px-6 py-4">450،000</td>
                  <td className="px-6 py-4">2،750،000</td>
                  <td className="px-6 py-4">3،700،000</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="increase-button" data-id="1">
                        <ion-icon
                          className="text-xl text-green-400"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="1"> */}
                      <span className="counter" data-id="1">
                        0
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="1"
                        value="0"
                      />

                      <button className="decrease-button" data-id="1">
                        <ion-icon
                          className="text-xl text-red-400"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-blue-200 bg-opacity-30 hover:bg-blue-300 hover:bg-opacity-30 text-gray-950">
                  <td className="px-6 py-4">خصوصی | VIP</td>
                  <td className="px-6 py-4">
                    <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                      10
                    </span>
                  </td>
                  <td className="px-6 py-4">450،000</td>
                  <td className="px-6 py-4">2،750،000</td>
                  <td className="px-6 py-4">3،700،000</td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="increase-button" data-id="2">
                        <ion-icon
                          className="text-xl text-green-400"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="2"> */}
                      <span className="counter" data-id="2">
                        0
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="2"
                        value="0"
                      />

                      <button className="decrease-button" data-id="2">
                        <ion-icon
                          className="text-xl text-red-400"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-opacity-30 text-gray-950 bg-blue-50 hover:bg-blue-100 hover:bg-opacity-30">
                  <td className="px-6 py-4">معمولی</td>
                  <td className="px-6 py-4">
                    <span className="inline-block p-1 mr-2 text-xs text-white bg-red-600 rounded-md relative top-[-2px]">
                      10
                    </span>
                  </td>
                  <td className="px-6 py-4">450،000</td>
                  <td className="px-6 py-4">2،750،000</td>
                  <td className="px-6 py-4">3،700،000</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="increase-button" data-id="3">
                        <ion-icon
                          className="text-xl text-green-400"
                          name="add-circle"
                        ></ion-icon>
                      </button>
                      {/* <span className="counter" className="text-sm" data-id="3"> */}
                      <span className="counter" data-id="3">
                        0
                      </span>
                      <input
                        type="hidden"
                        className="counter"
                        name="counter"
                        data-id="3"
                        value="0"
                      />

                      <button className="decrease-button" data-id="3">
                        <ion-icon
                          className="text-xl text-red-400"
                          name="remove-circle"
                        ></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex gap-2 mt-8">
            <button
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-green-400 rounded-md"
              //   onClick="hideSansModal();showSelectBank()"
              onClick={hideSansModal}
            >
              <ion-icon name="cart-outline"></ion-icon>
              خرید نهایی
            </button>
            <button className="flex items-center justify-center w-full gap-1 p-2 text-white bg-blue-400 rounded-md">
              <ion-icon name="cart"></ion-icon>
              افزودن به سبد خرید
            </button>
            <button
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-red-400 rounded-md"
              onClick={hideSansModal}
            >
              <ion-icon name="close"></ion-icon>
              بستن
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default SequenceInfo;
