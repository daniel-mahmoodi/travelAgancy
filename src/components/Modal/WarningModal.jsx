import React from "react";
import MainModal from "./MainModal";
import { uiActions } from "../../store/Ui-slice";
import { useDispatch, useSelector } from "react-redux";

const WarningModal = () => {
  console.log("warning");
  const dispatch = useDispatch();
  const description = useSelector((state) => state.ui.warningDesc);
  const hideWarningModalHandler = () => {
    dispatch(uiActions.hideWarning());
  };
  return (
    <MainModal hideModalHandler={hideWarningModalHandler}>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-50">
        <div className="border max-w-[450px] mx-auto shadow-lg rounded-md p-5 bg-white">
          <div className="flex flex-col items-center justify-center gap-4">
            <ion-icon
              class="w-10 h-10 text-yellow-500"
              name="alert-circle"
            ></ion-icon>
            <span className="font-medium text-gray-700">هشدار</span>
          </div>
          <div className="mt-4 text-sm font-light text-center text-gray-500">
            {description}
          </div>
          <div className="mt-5 text-center">
            <button
              onClick={hideWarningModalHandler}
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-yellow-500 border border-yellow-500 rounded-md bg-primary hover:bg-transparent hover:text-yellow-500"
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default WarningModal;
