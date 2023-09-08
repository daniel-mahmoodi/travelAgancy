import React from "react";
import { Link } from "react-router-dom";
const NewsBoxesInDashBoard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-5 mt-10">
      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/coins-2.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">درآمد کل</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/cashback-icon.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">کش بک</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/shopping-bag.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">مجودی فعلی</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/shopping-bag.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">محصولات</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/comment-white.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">دیدگاه های بی پاسخ</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/tag-red.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">منتظر پاسخ</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/tag-blue.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">در حال بررسی</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/tag-green.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">پاسخ داده شده</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/tag-gray.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">بسته شده</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>

      <Link
        data-aos="fade-down"
        to="/"
        className="flex shadow-md p-4 group hover:bg-blue-400 border border-gray-300 duration-200 rounded-md items-center gap-3"
      >
        <div>
          <img className="h-14 w-14" src="../img/tag-warnnig.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2 text-gray-400 group-hover:text-white">
          <p className="text-[12px]">تیکت های مدیریتی</p>
          <p className="text-[12px]">
            <span className="text-black group-hover:text-white pl-2 text-lg">
              0
            </span>{" "}
            تومان
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsBoxesInDashBoard;
