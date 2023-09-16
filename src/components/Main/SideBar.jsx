import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/Ui-slice";
export const SideBar = () => {
  const dispatch = useDispatch();
  const isSideBarVisible = useSelector((state) => state.ui.sideBarVisibile);
  const toggleSideBarVisibilityHandler = () => {
    dispatch(uiActions.toggleSideBarVisibility(false));
  };
  return (
    <div>
      <div
        onClick={toggleSideBarVisibilityHandler}
        className={`${
          isSideBarVisible ? "" : "hidden"
        } lg:block sidebar_fixed z-[900]`}
      >
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 lg:hidden sidebar-wrapper"></div>
        <div className="relative flex flex-col gap-2 pt-5 pe-5 bg-[#211e29] pb-8">
          <div className="flex flex-col items-center justify-center p-4">
            <img
              className="w-20 h-20 rounded-md"
              src="../img/icons8-avatar-96.png"
              alt=""
            />
            <p className="mt-3 text-white ">username</p>
            <Link to="/" className="sidebar-message_icon">
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
            <Link className="sidebar-accordion_button " to="/summary-dashboard">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon name="desktop-outline"></ion-icon>
              </div>
              پیشخوان کاربری
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="stats-chart-outline"
                ></ion-icon>
              </div>
              آنالیز و تحلیل محصولات
            </Link>
            <Link className="sidebar-accordion_button" to="/user-profile">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="person-outline"
                ></ion-icon>
              </div>
              پروفایل
            </Link>
            {/* <!-- accordion one ==== --> */}
            <div className="mt-2 group">
              <button className="sidebar-accordion_button">
                <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                  <ion-icon
                    className="pe-3 text-primary-200"
                    name="shield-checkmark-outline"
                  ></ion-icon>
                </div>
                پشتیبانی
                <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
              </button>
              {/* <!-- ===  accordion box === --> */}
              <div className="sidebar-accordion-box">
                <Link
                  className="sidebar-accordion-button_link flex justify-start items-center"
                  to="/#"
                >
                  <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                    <ion-icon
                      className="relative top-[2px] px-1 text-primary-200"
                      name="add-outline"
                    ></ion-icon>
                  </div>
                  ارسال پیام
                </Link>
                <Link
                  className="sidebar-accordion-button_link flex justify-start items-center"
                  to="/#"
                >
                  <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                    <ion-icon
                      className="relative top-[2px] px-1 text-primary-200"
                      name="chatbubble-outline"
                    ></ion-icon>
                  </div>
                  پیام های من
                </Link>
                <Link
                  className="sidebar-accordion-button_link flex justify-start items-center"
                  to="/#"
                >
                  <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                    <ion-icon
                      className="relative top-[2px] px-1 text-primary-200"
                      name="chatbubble-ellipses-outline"
                    ></ion-icon>
                  </div>
                  پاسخ های دریافت شده
                </Link>
                <Link
                  className="sidebar-accordion-button_link flex justify-start items-center"
                  to="/#"
                >
                  <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                    <ion-icon
                      className="relative top-[2px] px-1 text-primary-200"
                      name="chatbubbles-outline"
                    ></ion-icon>
                  </div>
                  پیام های دریافتی
                </Link>
              </div>
            </div>
            {/* <!-- ==== accordion one ends here ==== --> */}

            <Link className="sidebar-accordion_button" to="/#">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="relative top-[3px] pe-3 text-primary-200"
                  name="chatbox-ellipses-outline"
                ></ion-icon>
              </div>
              پرسش وپاسخ
            </Link>
            <Link
              className="sidebar-accordion_button"
              to="/summary-dashboard/supporting/supporting-tickets"
            >
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="relative top-[3px] pe-3 text-primary-200"
                  name="ticket-outline"
                ></ion-icon>
              </div>
              تیکت ها
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="stats-chart-outline"
                ></ion-icon>
              </div>
              آنالیز و تحلیل محصولات
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="star-half-outline"
                ></ion-icon>
              </div>
              بازخورد ها
            </Link>
            <Link className="sidebar-accordion_button" to="/#">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="stats-chart-outline"
                ></ion-icon>
              </div>
              فروش ها
            </Link>
          </div>

          {/* <!-- accordion two  ==== --> */}
          <div className="mt-2 group">
            <button className="sidebar-accordion_button">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="shield-checkmark-outline"
                ></ion-icon>
              </div>
              محصولات من
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="add-outline"
                  ></ion-icon>
                </div>
                محصولات منتشر شده
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubble-outline"
                  ></ion-icon>
                </div>
                ارسال محصول جدید
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubble-ellipses-outline"
                  ></ion-icon>
                </div>
                بروزرسانی
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubbles-outline"
                  ></ion-icon>
                </div>
                تغییر جزییات محصول
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pl-2 pr-1 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="chatbubbles-outline"
                  ></ion-icon>
                </div>
                تغییر محتوا
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion tow ends here ==== --> */}
          <Link className="sidebar-accordion_button " to="/#">
            <div className="relative top-[2px] pl-2 text-primary-200">
              <ion-icon
                className="pe-3 text-primary-200"
                name="stats-chart-outline"
              ></ion-icon>
            </div>
            آموزش ها
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <div className="relative top-[2px] pl-2 text-primary-200">
              <ion-icon
                className="pe-3 text-primary-200"
                name="star-half-outline"
              ></ion-icon>
            </div>
            محصولات خریداری شده
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <div className="relative top-[2px] pl-2 text-primary-200">
              <ion-icon
                className="pe-3 text-primary-200"
                name="stats-chart-outline"
              ></ion-icon>
            </div>
            علاقه مندی ها
          </Link>

          {/* <!-- accordion three ==== --> */}
          <div className="group">
            <button className="sidebar-accordion_button">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="pe-3 text-primary-200"
                  name="shield-checkmark-outline"
                ></ion-icon>
              </div>
              شرح عملکرد
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="cube-outline"
                  ></ion-icon>
                </div>
                سفارش ها
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="shield-outline"
                  ></ion-icon>
                </div>
                پشتیبانی
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="shield-checkmark-outline"
                  ></ion-icon>
                </div>
                پشتیبانی سریع
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="wallet-outline"
                  ></ion-icon>
                </div>
                بازاریابی
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="mail-unread-outline"
                  ></ion-icon>
                </div>
                درخواست ها
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200 ">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="card-outline"
                  ></ion-icon>
                </div>
                کش بک
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion three  ends here ==== --> */}

          {/* <!-- accordion four  ==== --> */}
          <div className="group">
            <button className="sidebar-accordion_button">
              <div className="pl-2 pr-0 py-0 text-primary-200 flex justify-center items-end">
                <i className="ion-cash relative top-[2px]"></i>
              </div>
              مدیریت مالی
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="bag-check-outline"
                  ></ion-icon>
                </div>
                پرداخت ها
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/wallet.html"
                target="_blank"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="wallet-outline"
                  ></ion-icon>
                </div>
                کیف پول دیجیتال
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="card-outline"
                  ></ion-icon>
                </div>
                اعتبار حساب
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="ban-outline"
                  ></ion-icon>
                </div>
                بلوکه شده ها
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="bar-chart-outline"
                  ></ion-icon>
                </div>
                درآمد ها
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="receipt-outline"
                  ></ion-icon>
                </div>
                تسویه حساب
              </Link>
              <Link
                className="sidebar-accordion-button_link  flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="warning-outline"
                  ></ion-icon>
                </div>
                پرداخت نشده
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion four  ends here ==== --> */}
          <Link className="sidebar-accordion_button" to="/#">
            <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
              <ion-icon
                className="pe-3 text-primary-200"
                name="pricetag-outline"
              ></ion-icon>
            </div>
            کد تخفیف
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
              <ion-icon
                className="pe-3 text-primary-200"
                name="ribbon-outline"
              ></ion-icon>
            </div>
            همکاری با ما
          </Link>

          {/* <!-- accordion five  ==== --> */}
          <div className="mb-4 group">
            <button className="sidebar-accordion_button">
              <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
                <ion-icon
                  className="relative top-[2px] px-1 text-primary-200"
                  name="construct-outline"
                ></ion-icon>
              </div>
              تنظیمات
              <i className="ion-chevron-down absolute left-[20px] group-focus-within:rotate-180 duration-300"></i>
            </button>
            {/* <!-- ===  accordion box === --> */}
            <div className="sidebar-accordion-box">
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="person-outline"
                  ></ion-icon>
                </div>
                اطلاعات حساب کاربری
              </Link>
              <Link
                className="sidebar-accordion-button_link flex justify-start items-center"
                to="/#"
              >
                <div className="relative top-[2px] pr-1 pl-2 text-primary-200">
                  <ion-icon
                    className="relative top-[2px] px-1 text-primary-200"
                    name="card-outline"
                  ></ion-icon>
                </div>
                اطلاعات حساب شما
              </Link>
            </div>
          </div>
          {/* <!-- ==== accordion five  ends here ==== --> */}
          <hr />
          <Link className="sidebar-accordion_button" to="/#">
            <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
              <ion-icon
                className="px-1 relative top-[2px] text-primary-200"
                name="chevron-forward-circle-outline"
              ></ion-icon>
            </div>
            وبلاگ ما
          </Link>
          <Link className="sidebar-accordion_button" to="/#">
            <div className="pl-2 py-0 text-primary-200 flex justify-center items-end">
              <ion-icon
                className="px-1 relative top-[2px] text-primary-200"
                name="create-outline"
              ></ion-icon>
            </div>
            درباره ما
          </Link>
        </div>
        {/* </aside> */}
      </div>
    </div>
  );
};
