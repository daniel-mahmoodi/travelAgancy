import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NewsBoxes = () => {
  return (
    <div className="rounded-md shadow-md p-7 border mt-8">
      <div className="flex justify-between">
        <p className="text-[20px] text-gray-700">اخبار و اطلاعیه</p>
        <Link
          to="/"
          className="border-b border-dashed pb-2 font-bold text-gray-400"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="bg-green-300 p-3 rounded-md mt-8 font-medium">
        <div className="flex justify-between mb-3">
          <Link
            to="/"
            className="text-gray-800 hover:text-white text-[15px] duration-300"
          >
            <i className="ion-ios-checkmark relative top-[2px] text-green-700 text-[20px]"></i>
            اختلال در تسویه حساب روز های 11 و 12 مرداد
          </Link>
          <p className="text-[10px] text-gray-800">1 روز قبل</p>
        </div>
        <p className="text-[12px] text-gray-700">
          توسعه دهنده عزیز با توجه به تعطیلات سراسری روزهای چهارشنبه و پنج شنبه
          (11 و 12 مردادماه)، بدلیل ...
        </p>
      </div>

      <div className="bg-green-300 p-3 rounded-md mt-8">
        <div className="flex justify-between mb-3 font-medium">
          <Link
            to="/"
            className="text-gray-800 hover:text-white text-[15px] duration-300"
          >
            <i className="ion-ios-checkmark relative top-[2px] text-green-700 text-[20px]"></i>
            دوشنبه های اختصاصی تیلویند
          </Link>
          <p className="text-[10px] text-gray-800">2 روز قبل</p>
        </div>
        <p className="text-[12px] text-gray-700">
          فقط تا ساعت ۲۴‌ امشب 9 مرداد فرصت داری افزونه پنل کاربری ووکامرس
          uPanel و ۸ محصول کاربردی دیگه ...
        </p>
      </div>
    </div>
  );
};

export default NewsBoxes;
