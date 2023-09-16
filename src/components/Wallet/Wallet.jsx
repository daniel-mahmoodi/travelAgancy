import React, { Fragment } from "react";

const Wallet = () => {
  return (
    <Fragment>
      {/* <nav
        className="flex mb-4 mt-[110px] lg:mr-[300px] lg:ml-[80px] mr-0 ml-0 px-6"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center selection:">
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-gray-700 duration-300 hover:text-blue-500"
            >
              صفحه اصلی
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-2 text-gray-400 rotate-180"
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
                className="ml-1 text-sm font-semibold text-gray-700 duration-300 hover:text-blue-500"
              >
                کیف پول
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 rotate-180"
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
              <span className="mx-3 ml-1 text-sm font-semibold text-gray-500 md:ml-2 dark:text-gray-400">
                شارژ کیف پول
              </span>
            </div>
          </li>
        </ol>
      </nav> */}

      <main className="bg-white border-0 main-content md:shadow-md md:border bg-opacity-98">
        <div>
          <h4 className="flex items-center gap-2 py-4 font-medium text-blue-950">
            <ion-icon className="w-6 h-6" name="card-outline"></ion-icon>
            شارژ کیف پول
          </h4>
          <hr />
          <div className="mt-10">
            <form className="mb-12" action="">
              {/* <!-- ===  radio buttons ==== --> */}
              <div className="p-3 border rounded-md shadow-md">
                <p className="mb-4 text-sm text-gray-500">
                  مبلغ مورد نظر خود را انتخاب کنید :
                </p>
                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="px-2 text-sm text-gray-600 title">5 میلیون</div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="px-2 text-sm text-gray-600 title">10 میلیون</div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="px-2 text-sm text-gray-600 title">15 میلیون</div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="px-2 text-sm text-gray-600 title">20 میلیون</div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                  />
                  <div className="px-2 text-sm text-gray-600 title">
                    مبلغ دلخواه
                  </div>
                </label>
              </div>
            </form>
          </div>

          {/* <!-- radio ends here --> */}
          <form action="">
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100"
                id="exampleFormControlInputText"
                data-input-text
              />
              <label
                htmlFor="exampleFormControlInputText"
                className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
              >
                مبلغ شارژ <span>( به تومان)</span>
              </label>
              <div className="text-[12px] text-red-500 mt-2 hidden">
                تنها عدد وارد کنید (زبان کیبورد خود را حتما به انگلیسی تغییر
                دهید )
              </div>

              <span className="text-[10px] text-gray-400 mt-2">
                پرداخت با کلیه کارت های عضو شتاب
              </span>
              <div className="flex justify-end">
                <button className="px-5 py-2 text-sm font-medium text-white duration-200 border rounded-md border-primary-500 bg-primary-500 bg-primary hover:bg-transparent hover:text-primary-500">
                  پرداخت هزینه
                </button>
              </div>
            </div>
          </form>

          <form className="mt-12" action="">
            <div className="relative mb-3" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100"
                data-input-text
              />
              <label
                htmlFor="exampleFormControlInputText"
                className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
              >
                کد هدیه
              </label>
              <div className="text-[12px] text-red-500 mt-2 hidden">
                کد مورد نظر اشتباه است !
              </div>
              <span className="text-[10px] text-gray-400 mt-2">
                با استفاده از کارت های اعتباری تیلویند حساب خود را شارژ کنید
              </span>

              <div className="flex justify-end">
                <a
                  className="px-3 py-1 text-white duration-200 border rounded-md bg-secondary-500 border-secondary-400 hover:bg-transparent hover:text-secondary-500"
                  href="#"
                >
                  اعمال کد
                </a>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Wallet;

{
  /* <script>
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
    </script> */
}
