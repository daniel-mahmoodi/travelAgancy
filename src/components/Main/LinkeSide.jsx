import React from "react";
import { Link } from "react-router-dom";
export const LinkeSide = () => {
  return (
    <div>
      <div className="hidden lg:block sidebar_fixed z-[900]">
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 lg:hidden sidebar-wrapper"></div>
        <div className="relative flex flex-col gap-2 pt-5 pe-5 bg-[#211e29] pb-8">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              className="w-20 h-20 rounded-md"
              src="../img/icons8-avatar-96.png"
              alt=""
            />
            <p className="mt-3 text-white">username</p>
            <Link to="/#">
              <ion-icon
                className="sidebar-message_icon"
                title="سبد خرید "
                name="cart"
              ></ion-icon>
            </Link>
            <button
              title="خروج از حساب کاربری"
              className="cursor-pointer sidebar-exit_button"
            >
              <ion-icon name="exit-outline"></ion-icon>
              <span className="sr-only">Exit button</span>
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="desktop-outline"
              ></ion-icon>
              پیشخوان کاربری
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="stats-chart-outline"
              ></ion-icon>
              آنالیز و تحلیل محصولات
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="person-outline"
              ></ion-icon>
              پروفایل
            </Link>
            {/* <!-- accordion one ==== --> */}
            <div className="mt-2 group">
              <button className="sidebar-accordion_button">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="shield-checkmark-outline"
                ></ion-icon>
                پشتیبانی
                <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
              </button>
              {/* <!-- ===  accordion box === --> */}
              <div className="sidebar-accordion-box">
                <Link className="sidebar-accordion-button_link" to="/#">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="add-outline"
                  ></ion-icon>
                  ارسال پیام
                </Link>
                <Link className="sidebar-accordion-button_link" to="/#">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubble-outline"
                  ></ion-icon>
                  پیام های من
                </Link>
                <Link className="sidebar-accordion-button_link" to="/#">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubble-ellipses-outline"
                  ></ion-icon>
                  پاسخ های دریافت شده
                </Link>
                <Link className="sidebar-accordion-button_link" to="/#">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubbles-outline"
                  ></ion-icon>
                  پیام های دریافتی
                </Link>
              </div>
            </div>
            {/* <!-- ==== accordion one ends here ==== --> */}

            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="relative top-[3px] pe-3 text-primary-200"
                name="chatbox-ellipses-outline"
              ></ion-icon>
              پرسش وپاسخ
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="relative top-[3px] pe-3 text-primary-200"
                name="ticket-outline"
              ></ion-icon>
              تیکت ها
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="stats-chart-outline"
              ></ion-icon>
              آنالیز و تحلیل محصولات
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="star-half-outline"
              ></ion-icon>
              بازخورد ها
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <ion-icon
                className="pe-3 text-primary-200"
                name="stats-chart-outline"
              ></ion-icon>
              فروش ها
            </Link>
          </div>

          {/* <!-- accordion two  ==== --> */}
          <div className="mt-2 group">
            <button className="sidebar-accordion_button">
              <ion-icon
                className="pe-3 text-primary-200"
                name="shield-checkmark-outline"
              ></ion-icon>
              محصولات من
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="add-outline"
                ></ion-icon>
                محصولات منتشر شده
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="chatbubble-outline"
                ></ion-icon>
                ارسال محصول جدید
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="chatbubble-ellipses-outline"
                ></ion-icon>
                بروزرسانی
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="chatbubbles-outline"
                ></ion-icon>
                تغییر جزییات محصول
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="chatbubbles-outline"
                ></ion-icon>
                تغییر محتوا
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion tow ends here ==== --> */}
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="pe-3 text-primary-200"
              name="stats-chart-outline"
            ></ion-icon>
            آموزش ها
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="pe-3 text-primary-200"
              name="star-half-outline"
            ></ion-icon>
            محصولات خریداری شده
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="pe-3 text-primary-200"
              name="stats-chart-outline"
            ></ion-icon>
            علاقه مندی ها
          </Link>

          {/* <!-- accordion three ==== --> */}
          <div className="group">
            <button className="sidebar-accordion_button">
              <ion-icon
                className="pe-3 text-primary-200"
                name="shield-checkmark-outline"
              ></ion-icon>
              شرح عملکرد
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="cube-outline"
                ></ion-icon>
                سفارش ها
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="shield-outline"
                ></ion-icon>
                پشتیبانی
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="shield-checkmark-outline"
                ></ion-icon>
                پشتیبانی سریع
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="wallet-outline"
                ></ion-icon>
                بازاریابی
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="mail-unread-outline"
                ></ion-icon>
                درخواست ها
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="card-outline"
                ></ion-icon>
                کش بک
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion three  ends here ==== --> */}

          {/* <!-- accordion four  ==== --> */}
          <div className="group">
            <button className="sidebar-accordion_button">
              <i className="ion-cash relative top-[2px] px-1"></i>
              مدیریت مالی
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="bag-check-outline"
                ></ion-icon>
                پرداخت ها
              </Link>
              <Link
                className="sidebar-accordion-button_link"
                to="/wallet.html"
                target="_blank"
              >
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="wallet-outline"
                ></ion-icon>
                کیف پول دیجیتال
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="card-outline"
                ></ion-icon>
                اعتبار حساب
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="ban-outline"
                ></ion-icon>
                بلوکه شده ها
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="bar-chart-outline"
                ></ion-icon>
                درآمد ها
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="receipt-outline"
                ></ion-icon>
                تسویه حساب
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="warning-outline"
                ></ion-icon>
                پرداخت نشده
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion four  ends here ==== --> */}
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="pe-3 text-primary-200"
              name="pricetag-outline"
            ></ion-icon>
            کد تخفیف
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="pe-3 text-primary-200"
              name="ribbon-outline"
            ></ion-icon>
            همکاری با ما
          </Link>

          {/* <!-- accordion five  ==== --> */}
          <div className="mb-4 group">
            <button className="sidebar-accordion_button">
              <ion-icon
                className="relative top-[2px] px-1 text-primary-200"
                name="construct-outline"
              ></ion-icon>
              تنظیمات
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="person-outline"
                ></ion-icon>
                اطلاعات حساب کاربری
              </Link>
              <Link className="sidebar-accordion-button_link" to="/#">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="card-outline"
                ></ion-icon>
                اطلاعات حساب شما
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion five  ends here ==== --> */}
          <hr />
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="px-1 relative top-[2px] text-primary-200"
              name="chevron-forward-circle-outline"
            ></ion-icon>
            وبلاگ ما
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <ion-icon
              className="px-1 relative top-[2px] text-primary-200"
              name="create-outline"
            ></ion-icon>
            درباره ما
          </Link>
        </div>
        {/* </aside> */}
      </div>
    </div>
  );
};
