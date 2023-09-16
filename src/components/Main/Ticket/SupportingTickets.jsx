// <!DOCTYPE html>
// <html lang="en" style="background-image: url('../img/main-wallpaper.png')">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>تیکت های مشتریان | تیلویند</title>
//     <link rel="stylesheet" href="../dist/output.css" />
//     <script
//       type="module"
//       src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
//     ></script>
//     <script
//       nomodule
//       src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
//     ></script>
//     <link
//       rel="stylesheet"
//       href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
//     />
//     <script
//       src="https://code.jquery.com/jquery-3.7.0.min.js"
//       integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
//       crossorigin="anonymous"
//     ></script>
//   </head>

import React from "react";

const SupportingTickets = () => {
  return (
    <main className="bg-white border-0 main-content md:shadow-md md:border bg-opacity-98">
      <h4 className="flex items-center gap-2 py-4 font-medium text-blue-950">
        <ion-icon
          class="relative top-[2px] pl-2"
          name="mail-open-outline"
        ></ion-icon>
        انتخاب تیکت پشتیبانی
      </h4>
      <hr />
      <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              بخش پشتیبانی
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              سوالات و مشکلات خود را در این بخش مطرح کنید
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              بخش فروش
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              سوالات قبل از خرید و مشکلات در سفارشات
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              حسابداری
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              مشخصات فیش واریزی یا مشکلات فاکتورها را اینجا مطرح کنید
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              سوالات عمومی
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              مخصوص کاربران غیرعضو اگر عضو سایت هستید وارد شوید تا دپارتمان های
              دیگر را مشاهده کنید
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              نظرات و پیشنهادات
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              نظرات و انتقادات در این بخش قرار میگیرد
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              شکایت و تخلفات
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              انتقادات و شکایات خود را در این بخش قرار میگیرد
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              طراحی وب سایت
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              سفارشی طراحی وب سایت
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              طراحی اپلیکشین موبایل
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              سفارش طراحی اپلیکشین موبایل
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>

        <div className="p-5 border border-gray-300 rounded-md shadow-md">
          <div className="flex flex-col gap-4 text-gray-500">
            <p className="flex items-center gap-2">
              <ion-icon
                class="text-blue-400 text-[20px]"
                name="mail-open-outline"
              ></ion-icon>
              تنظیم سرور
            </p>
            <p className="text-gray-900 font-bold mb-6 text-[12px]">
              سفارشی تنظیم سرور از این بخش ارسال میشود
            </p>
          </div>
          <div className="flex justify-center">
            <a
              className="px-5 py-2 text-sm font-medium text-white duration-200 bg-blue-500 border border-blue-500 rounded-md bg-primary hover:bg-transparent hover:text-blue-500"
              href="/"
            >
              ارسال تیکت پیشتیبانی
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupportingTickets;
