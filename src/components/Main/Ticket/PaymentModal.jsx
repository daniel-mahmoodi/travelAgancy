import React, { useState } from "react";
import MainModal from "../../Modal/MainModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
const PaymentModal = () => {
  const dispatch = useDispatch();
  const [activeDiv, setActiveDiv] = useState(null);
  const paymentAmount = useSelector(
    (state) => state.wallet.walletWouldChargedAmount
  );
  const hideSelectBank = () => {
    dispatch(uiActions.toggleWalletPaymentModal(false));
  };
  return (
    <MainModal>
      <div
        className="fixed top-0 left-0 w-full h-full bg-blue-50/30"
        //  style="{{z-index: 1000; overflow-y: scroll; display: none}}"
        style={{
          zIndex: 1000,
          overflowY: "scroll",
          // display: "none",
        }}
        id="selectBankModal"
      >
        <div className="container mx-auto mt-10">
          <div className="shadow-md border mx-auto relative rounded-md p-6 max-w-[750px] bg-white">
            <button
              className="text-[25px] hover:text-red-500 duration-200 text-gray-500 absolute top-[12px] right-[10px]"
              onClick={hideSelectBank}
            >
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
            <div className="flex items-center justify-between mt-5 mb-4">
              <p className="flex items-center gap-2 py-4 text-gray-600">
                <ion-icon className="w-6 h-6" name="card-outline"></ion-icon>
                شارژ کیف پول
              </p>
              <p className="text-green-400">
                {paymentAmount.toLocaleString()} تومان
              </p>
            </div>
            <hr />
            <div className="flex flex-col items-center gap-3 my-10">
              <p className="text-[15px] text-gray-700">
                پرداخت از درگاه بانک با استفاده از کلیه کارت های عضو شتاب:
              </p>
              <div className="flex items-center gap-4 p-5">
                <div
                  className={`border ${
                    activeDiv === "1" ? "border-green-300" : "border-gray-300"
                  } shadow-md hover:scale-[1.1] hover:opacity-60 hover:border-green-300 duration-200 p-4 rounded cursor-pointer `}
                  onClick={() => setActiveDiv("1")}
                >
                  <img
                    className={`${activeDiv === "1" ? "h-[6rem]" : "h-20"}`}
                    src="../img/mellu bank.png"
                    alt=""
                  />
                </div>
                <div
                  className={`border ${
                    activeDiv === "2" ? "border-green-300" : "border-gray-300"
                  } shadow-md hover:scale-[1.1] hover:opacity-60 hover:border-green-300 duration-200 p-4 rounded cursor-pointer `}
                  onClick={() => setActiveDiv("2")}
                >
                  <img
                    className={`${activeDiv === "2" ? "h-[6rem]" : "h-20"}`}
                    src="../img/Mellat.jpg"
                    alt=""
                  />
                </div>
                <div
                  className={`border ${
                    activeDiv === "3" ? "border-green-300" : "border-gray-300"
                  } shadow-md hover:scale-[1.1] hover:opacity-60 hover:border-green-300 duration-200 p-4 rounded cursor-pointer `}
                  onClick={() => setActiveDiv("3")}
                >
                  <img
                    className={`${activeDiv === "3" ? "h-[6rem]" : "h-20"}`}
                    src="../img/saman.png"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="p-2 text-white duration-200 bg-green-400 border border-green-400 rounded-md hover:bg-transparent hover:text-gray-600"
                href="#"
              >
                پرداخت از طریق درگاه بانک ملی
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default PaymentModal;
