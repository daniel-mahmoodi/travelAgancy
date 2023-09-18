import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
const StoreBoxInfo = () => {
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(uiActions.toggleCartModal());
  };
  return (
    <div className="flex justify-center mb-8 mr-0 ml-0 lg:mr-[300px] lg:ml-[40px]">
      <div className="p-6 w-full top-0 mx-auto flex flex-wrap justify-center items-center gap-2 border bg-[#3855bb] border-gray-300 shadow-lg rounded-md">
        <div className="flex justify-between gap-2 h-10">
          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="calendar-outline"></ion-icon>
            تعداد سانس ها : 1
          </div>

          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="ticket-outline"></ion-icon>
            تعداد بلیط ها : 7
          </div>

          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="cash-outline"></ion-icon>
            مجموع : {(37120000).toLocaleString()}
          </div>
        </div>
        <div className="flex h-10 gap-2 mt-0">
          <Link
            to="/"
            className=" badge-store relative bg-green-500 text-white duration-200 flex items-center gap-2 py-1 text-[12px] px-2 rounded-full"
          >
            <ion-icon name="cart-outline"></ion-icon>
            خرید نهایی
          </Link>

          <button className="flex badge-store_green relative text-white bg-red-500 items-center gap-2 py-1 text-[12px] px-2 rounded-full">
            <ion-icon name="cart-outline"></ion-icon>
            کنسل سبد خرید
          </button>

          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="time-outline"></ion-icon>
            28:54
          </div>
        </div>
        <div className="flex justify-center top-[3px] gap-2 ">
          <button className="rounded-full text-white bg-[#4576ef] p-2 h-8 w-8 ">
            <ion-icon title="بارگذاری مجدد" name="repeat-outline"></ion-icon>
          </button>
          <button
            onClick={showCart}
            className="p-2 h-8 w-8 text-white bg-red-500 rounded-full"
          >
            <ion-icon title="سبد خرید" name="bag-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreBoxInfo;
