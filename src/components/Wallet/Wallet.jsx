import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/Ui-slice";
import { walletActions } from "../../store/Wallet-slice";
const Wallet = () => {
  const dispatch = useDispatch();
  const [desiredAmount, setDesiredAmount] = useState(false);
  const [amount, setAmount] = useState(0);
  const [isNumber, setIsNumber] = useState(true);

  function areAllCharactersNumbers(inputString) {
    // Use a regular expression to check if all characters are numbers
    return /^[0-9]+$/.test(inputString);
  }
  const handleRadioInputeValue = (e) => {
    setAmount(e.target.value);
    setDesiredAmount(false);
  };
  const handleInputeValue = (e) => {
    if (areAllCharactersNumbers(e.target.value)) {
      setAmount(e.target.value);
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
  };

  const showDesiredAmount = (e) => {
    setDesiredAmount(true);
  };

  const sendUserToPayHandler = (event) => {
    event.preventDefault();
    if (amount > 0) {
      if (isNumber) {
        dispatch(uiActions.toggleWalletPaymentModal(true));
        dispatch(walletActions.addAmountUserCharged(amount));
      } else {
        dispatch(uiActions.showWarning("مبلغ شارژ به درستی وارد نشده است"));
      }
    } else {
      dispatch(uiActions.showWarning("مبلغی وارد نشده است"));
    }
  };
  const submitCoupon = (event) => {
    event.preventDefault();
    dispatch(uiActions.showWarning("کد تخفیف نا معتبر است"));
  };
  return (
    <Fragment>
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
                    value={5 * 1000000}
                    onChange={handleRadioInputeValue}
                  />
                  <div className="px-2 text-sm text-gray-600 title">
                    5 میلیون
                  </div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    value={10 * 1000000}
                    onChange={handleRadioInputeValue}
                  />
                  <div className="px-2 text-sm text-gray-600 title">
                    10 میلیون
                  </div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    value={15 * 1000000}
                    onChange={handleRadioInputeValue}
                  />
                  <div className="px-2 text-sm text-gray-600 title">
                    15 میلیون
                  </div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    value={20 * 1000000}
                    onChange={handleRadioInputeValue}
                  />
                  <div className="px-2 text-sm text-gray-600 title">
                    20 میلیون
                  </div>
                </label>

                <label className="flex p-2 cursor-pointer radio">
                  <input
                    className="my-auto transform scale-125"
                    type="radio"
                    name="sfg"
                    onChange={showDesiredAmount}
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
              {desiredAmount && (
                <div>
                  <input
                    type="text"
                    className=" text-sm block min-h-[auto] w-full rounded border border-gray-300 shadow-sm focus:border-blue-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear opacity-100 focus:placeholder:opacity-100"
                    placeholder="مبلغ شارژ ( به تومان)"
                    id="exampleFormControlInputText"
                    data-input-text
                    onChange={handleInputeValue}
                  />
                  {/* <label
                    htmlFor="exampleFormControlInputText"
                    className="pointer-events-none absolute right-3 group top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out"
                  >
                    مبلغ شارژ ( به تومان)
                  </label> */}
                  {!isNumber && (
                    <div className="text-[12px] text-red-500 mt-2 ">
                      تنها عدد وارد کنید (زبان کیبورد خود را حتما به انگلیسی
                      تغییر دهید )
                    </div>
                  )}
                </div>
              )}

              <span className="text-[10px] text-gray-400 mt-2">
                پرداخت با کلیه کارت های عضو شتاب
              </span>
              <div onClick={sendUserToPayHandler} className="flex justify-end">
                <button className="px-5 py-2 text-sm font-medium text-white duration-200 border rounded-md border-primary-500 bg-primary-500 bg-primary hover:bg-transparent hover:text-primary-500">
                  پرداخت هزینه
                </button>
              </div>
            </div>
          </form>

          <form onSubmit={submitCoupon} className="mt-12" action="">
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
                <button
                  className="px-3 py-1 text-white duration-200 border rounded-md bg-secondary-500 border-secondary-400 hover:bg-transparent hover:text-secondary-500"
                  href=""
                >
                  اعمال کد
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Wallet;
