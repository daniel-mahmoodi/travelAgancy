
// <!-- <html lang="en" style="background-image: url('../img/main-wallpaper.png')"> -->
  // <!-- <head>
  //   <meta charset="UTF-8" />
  //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //   <title>پروفایل | تیلویند</title>
  //   <link rel="stylesheet" href="../dist/output.css" />
  //   <script
  //     type="module"
  //     src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
  //   ></script>
  //   <script
  //     nomodule
  //     src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
  //   ></script>
  //   <link
  //     rel="stylesheet"
  //     href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  //   />
  //   <script
  //     src="https://code.jquery.com/jquery-3.7.0.min.js"
  //     integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
  //     crossorigin="anonymous"
  //   ></script>
  //   <style>
  //     .tabAnim {
  //       z-index: -9;
  //     }

  //     #option0:checked ~ div {
  //       --tw-translate-x: 0%;
  //     }

  //     #option1:checked ~ div {
  //       --tw-translate-x: 100%;
  //     }

  //     #option2:checked ~ div {
  //       --tw-translate-x: 200%;
  //     }

  //     #option3:checked ~ div {
  //       --tw-translate-x: 300%;
  //     }

  //     #option4:checked ~ div {
  //       --tw-translate-x: 400%;
  //     }
  //   </style>
  // </head> -->

 import React, { Fragment } from 'react'
 
 const ProfileInformation = () => {
   return (
     <Fragment>
      
    {/* <nav
      class="flex mb-4 mt-[110px] lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center selection:">
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-700 duration-300 hover:text-blue-500"
          >
            صفحه اصلی
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-3 h-3 mx-2 text-gray-400 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              class="ml-1 text-sm font-semibold text-gray-700 duration-300 hover:text-blue-500"
              >کیف پول</a
            >
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg
              class="w-3 h-3 text-gray-400 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span
              class="mx-3 ml-1 text-sm font-semibold text-gray-500 md:ml-2 dark:text-gray-400"
              >شارژ کیف پول</span
            >
          </div>
        </li>
      </ol>
    </nav> */}
    <main
      class="bg-white border-0 main-content md:shadow-md md:border bg-opacity-98"
    >
      <div class="h-full">
        {/* <!-- ===== profile ==== --> */}
        <div class="flex flex-col">
          <div class="p-3">
            <div class="file-uploader_section">
              <label htmlFor="dropzone-file" class="file-uploader_label">
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p
                    class="mb-4 text-sm font-bold text-gray-800 dark:text-gray-400"
                  >
                    بنر خود را آپلود کنید
                  </p>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">برای آپلود کلیک کنید</span> یا
                    فایل را وارد نمایید
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (حداکثر 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
            <div class="border border-gray-300 rounded-md shadow-md">
              <div class="flex justify-center mt-8">
                <img
                  class="rounded-full w-60 h-60"
                  src="../img/avatar-svgrepo-com.svg"
                  alt=""
                />
              </div>
              <p class="mt-5 text-center text-gray-500">username</p>
              <div>
                <div>
                  <input type="file" name="file" id="file" class="sr-only" />
                  <label
                    htmlFor="file"
                    class="relative flex min-h-[200px] items-center justify-center rounded-md border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span
                        class="block mb-2 font-semibold text-gray-500 text-md"
                      >
                        فایل را بندازید اینجا
                      </span>
                      <span
                        class="mb-2 block text-base font-medium text-[#6B7280]"
                      >
                        یا
                      </span>
                      <span class="file-uploader_button"> آپلود فایل </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- ==== profile forms start here ====== --> */}

          {/* <!-- Right column co ntainer --> */}
          <div class="main-content-right-container-profile-sign-in">
            <div class="w-full mt-10 mb-12">
              <p class="mb-10 font-bold text-center text-gray-600">
                اطلاعات کاربری شما
              </p>
              <form>
                {/* <!--Sign in section--> */}
                <div
                  class="flex flex-row items-center justify-center gap-2 mb-10"
                >
                  <p class="mb-0 mr-4 text-lg text-gray-500">ثبت نام با :</p>

                  {/* <!-- Facebook --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-gray-500 hover:text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Facebook --> */}
                    <ion-icon
                      class="w-4 relative top-[4px] h-4 self-center mx-auto"
                      name="logo-facebook"
                    ></ion-icon>
                  </button>

                  {/* <!-- Twitter --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-gray-500 hover:text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Twitter --> */}
                    <ion-icon
                      class="w-4 relative top-[4px] h-4 self-center mx-auto"
                      name="logo-twitter"
                    ></ion-icon>
                  </button>

                  {/* <!-- Linkedin --> */}
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-gray-500 hover:text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Linkedin --> */}
                    <ion-icon
                      class="w-4 relative top-[4px] h-4 self-center mx-auto"
                      name="logo-linkedin"
                    ></ion-icon>
                  </button>

                  {/* <!-- == google === --> */}

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-gray-500 hover:text-blue-500 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    {/* <!-- Linkedin --> */}
                    <ion-icon
                      class="w-4 relative top-[4px] h-4 self-center mx-auto"
                      name="logo-google"
                    ></ion-icon>
                  </button>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div
                  class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
                >
                  <p
                    class="mx-4 mb-0 font-semibold text-center dark:text-gray-500"
                  >
                    یا
                  </p>
                </div>

                {/* <!-- Euser name input --> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border border-gray-300 focus:border-[#7887c0] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="username"
                    placeholder="user name"
                    name="username"
                    data-input-text
                  />
                  <span class="text-[10px] text-gray-500"
                    >نام کاربری باید به زبان انگلیسی وارد کنید</span
                  >
                  <div class="text-red-600 hidden text-[10px] mt-2">
                    این نام کاربری صحیح قبلا وارد شده است !
                  </div>
                  <ion-icon
                    class="absolute left-[10px] top-[14px]"
                    name="person-outline"
                  ></ion-icon>
                  <label
                    htmlFor="username"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >نام کاربری
                  </label>
                </div>

                {/* <!-- === first name input ===  --> */}

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border border-gray-300 focus:border-[#7887c0] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="firstname"
                    placeholder="first name"
                    name="first-name"
                    data-input-text
                  />
                  <div class="text-gray-500 text-[10px] mt-2">
                    نام خود را باید به زبان فارسی وارد نمایید
                  </div>
                  <label
                    htmlFor="firstname"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >نام
                  </label>
                </div>

                {/* <!-- === last name input ===  --> */}

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border border-gray-300 focus:border-[#7887c0] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="lastname"
                    placeholder="last name"
                    name="last-name"
                    data-input-text
                  />
                  <div class="text-red-600 hidden text-[10px] mt-2">
                    نام خود را باید به زبان فارسی وارد نمایید !
                  </div>
                  <label
                    htmlFor="lastname"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >نام خانوادگی
                  </label>
                </div>

                {/* <!-- === birthday input ===  --> */}

                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded border border-gray-300 focus:border-[#7887c0] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="birth"
                    placeholder="last name"
                    name="brithday"
                    data-input-text
                  />
                  <ion-icon
                    class="absolute left-[10px] top-[14px]"
                    name="today-outline"
                  ></ion-icon>
                  <div class="text-gray-500 text-[10px] mt-2">
                    تاریخ را به صورت عددی وارد نمایید
                  </div>
                  <div class="text-red-500 hidden text-[10px] mt-2">
                    تاریخ را اشتباه وارد کردید !
                  </div>
                  <label
                    htmlFor="birth"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >تاریخ تولد
                  </label>
                </div>

                {/* <!-- Password input --> */}
                <div class="relative mt-8 mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border-gray-300 focus:border-[#7887c0] border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput22"
                    placeholder="Password"
                    data-input-text
                  />
                  <ion-icon
                    class="absolute left-[10px] top-[14px]"
                    name="eye-outline"
                  ></ion-icon>
                  <span class="text-gray-500 text-[10px] mt-2"
                    >رمز عبور باید شامل حروف انگلیسی باشد
                  </span>
                  <div class="text-red-600 hidden text-[10px] mt-2">
                    رمز عبور باید حداقل شامل 20 کاراکتر و حداقل یک حروف بزرگ
                    انگلیسی باشد !
                  </div>
                  <label
                    htmlFor="exampleFormControlInput22"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >رمز عبور
                  </label>
                </div>

                {/* <!-- Password repeat input --> */}
                <div class="relative mt-8 mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    class="peer block min-h-[auto] w-full rounded border-gray-300 focus:border-[#7887c0] border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="repeat"
                    placeholder="Password"
                    data-input-text
                  />
                  <ion-icon
                    class="absolute left-[10px] top-[14px]"
                    name="eye-outline"
                  ></ion-icon>
                  <div class="text-red-600 hidden text-[10px] mt-2">
                    رمز عبور اشتباه است ! لطفا با دقت وارد نمایید
                  </div>
                  <label
                    htmlFor="repeat"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >تکرار رمز عبور
                  </label>
                </div>

                {/* <!-- === gender input ===  --> */}

                <div action="">
                  <label
                    htmlFor="gender"
                    class="block mb-2 text-sm font-medium text-gray-800"
                    >جنسیت</label
                  >
                  <select
                    id="gender"
                    name="gender"
                    class="cursor-pointer bg-gray-200 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-green-300 focus:border-[#7887c0] block w-full py-2.5 px-5"
                  >
                    <option value="male">آقا</option>
                    <option value="female">خانم</option>
                  </select>
                </div>
                {/* <!-- === bigrphy ==== --> */}
                <div class="relative mt-10 mb-3" data-te-input-wrapper-init>
                  <textarea
                    class="peer block min-h-[auto] w-full focus:border-[#7887c0] rounded border-gray-300 border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your message"
                    data-input-text
                  ></textarea>
                  <label
                    htmlFor="tw-elements"
                    class="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[30px] peer-focus:scale-[0.8] peer-focus:text-gray-900 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                    >متن بیوگرافی</label
                  >
                </div>
                {/* <!-- ==== allowed tags ====  --> */}
                <p
                  class="bg-red-500 rounded-md p-2 mt-5 flex items-center justify-between text-white text-[12px]"
                >
                  در متن بیوگرافی خود حتما توانایی های خود را کامل ذکر کنید
                  <ion-icon
                    class="text-[15px]"
                    name="alert-circle-outline"
                  ></ion-icon>
                </p>

                {/* <!-- ===  radio buttons ==== --> */}

                <div
                  class="flex flex-col p-4 mt-10 border border-gray-300 rounded shadow-lg"
                >
                  <p class="mb-6 font-bold">انتخاب نوع پرفایل :</p>
                  <div class="inline-flex items-center">
                    <input
                      class="my-auto transform scale-125 cursor-pointer"
                      type="radio"
                      name="sfg"
                    />
                    <label
                      class="mt-px cursor-pointer select-none font-light text-[12px] text-gray-700 pr-2"
                      htmlFor="html"
                    >
                      کارفرما
                    </label>
                  </div>
                  <div class="inline-flex items-center mt-2">
                    <input
                      class="my-auto transform scale-125 cursor-pointer"
                      type="radio"
                      name="sfg"
                    />
                    <label
                      class="mt-px cursor-pointer select-none font-light text-[12px] text-gray-700 pr-2"
                      htmlFor="html"
                    >
                      فروشنده
                    </label>
                  </div>
                </div>
                <div class="flex justify-end mt-8">
                  <button
                    class="px-5 py-2 text-sm font-medium text-white duration-200 bg-green-500 border border-green-500 rounded-md bg-primary hover:bg-transparent hover:text-green-500"
                  >
                    ذخیره اطلاعات
                  </button>
                </div>
                {/* <!-- radio ends here --> */}

                <div class="flex items-center justify-between mt-8 mb-10">
                  {/* <!-- Remember me checkbox --> */}
                  <div
                    class="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]"
                  >
                    <input
                      class="relative ml-[10px] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] accent-green-500 rounded-[0.25rem] border-[0.125rem] cursor-pointer border-solid border-neutral-300 outline-none"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label
                      class="inline-block text-[12px] text-gray-500 pl-[0.15rem] hover:cursor-pointer"
                      htmlFor="exampleCheck2"
                    >
                      مرا به خاطر بسپار
                    </label>
                  </div>

                  {/* <!--Forgot password link--> */}
                  <a
                    href="#"
                    class="text-[12px] hover:text-green-400 duration-200 text-gray-500"
                    >رمزعبور خود را فراموش کردید؟</a
                  >
                </div>

                {/* <!-- Login button --> */}
                <div class="text-center lg:text-left">
                  {/* <!-- Register link --> */}
                  <p
                    class="mb-0 mt-2 flex justify-start gap-2 pt-1 text-[12px] text-gray-500 font-semibold"
                  >
                    اکانت ندارید ؟
                    <a
                      href="sign-in.html"
                      class="text-green-500 transition duration-150 ease-in-out text-danger hover:underline"
                      >ثبت نام کنید</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
     </Fragment>
   )
 }
 
 export default ProfileInformation
   
    {/* <script>
      // Get the button:
      let mybutton = document.getElementById("myScrollbackBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    </script>
    <script>
      $(window).ready(function () {
        var userMenuInterval = null;
        $("#user-menu-button").click(function () {
          $(".navbar-profile-dropdown_links").removeClass("hidden");
        });

        $(".navbar-profile-dropdown_links,#user-menu-button").mouseenter(
          function () {
            clearTimeout(userMenuInterval);
          }
        );
        $(".navbar-profile-dropdown_links,#user-menu-button").mouseleave(
          function () {
            userMenuInterval = setTimeout(function () {
              $(".navbar-profile-dropdown_links").addClass("hidden");
            }, 700);
          }
        );

        $("#sidebar-btn").click(function () {
          showSideNav();
        });
        $(".sidebar-wrapper").click(function () {
          hideSideNav();
        });

        function showSideNav() {
          $(".sidebar_fixed").removeClass("hidden").addClass("top-0");
        }

        function hideSideNav() {
          $(".sidebar_fixed").addClass("hidden").removeClass("top-0");
        }
        $(window).resize(function () {
          hideSideNav();
        });
        $("[data-input-text]").focus(function () {
          $(this)
            .siblings("label")
            .addClass(
              "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
            );
        });
        $("[data-input-text]").blur(function () {
          if ($(this).val().length == 0) {
            $(this)
              .siblings("label")
              .removeClass(
                "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
              );
          }
        });
        $("[data-input-text]").each(function () {
          if ($(this).val().length == 0) {
            $(this)
              .siblings("label")
              .removeClass(
                "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
              );
          } else {
            $(this)
              .siblings("label")
              .addClass(
                "-translate-y-[30px] text-gray-700 scale-[0.8] text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none"
              );
          }
        });
      });
    </script> --> */}
