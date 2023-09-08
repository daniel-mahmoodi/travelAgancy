import React from "react";
import MainModal from "./MainModal";
import { useDispatch } from "react-redux";
import {uiActions} from '../../store/Ui-slice'
const CartPopUpMenu = () => {
  console.log("cartModal component");
  const dispatch = useDispatch();
  const hideBasket = () => {
    dispatch(uiActions.toggleCartModal());
    console.log("hideBasket");
  };
  const hideCartModalHandler = () => {
    dispatch(uiActions.toggleCartModal());
  };
  return (
    <MainModal hideModalHandler={hideCartModalHandler}>
      <div
        className=""
        //     style="z-index: 1000; overflow-y: scroll; display: none"
        style={{
          zIndex: 1000,
          // overflowY: "scroll",
          // display: "none",
        }}
        // id="basket"
      >
        <div className="shadow-md max-w-[600px] rounded-md border p-4 mt-10 bg-white">
          <div className="flex items-center justify-between pb-3 font-bold">
            سبد خرید
            <button onClick={hideBasket}>
              <ion-icon
                className="w-8 h-8 text-red-500"
                name="close-circle-outline"
              ></ion-icon>
            </button>
          </div>
          <hr />
          <div className="my-8">
            <p className="mb-8 font-bold">بلیط های افزوده شده به سبد خرید :</p>
            {/* <!-- subject --> */}
            <p className="font-bold text-center text-gray-500">
              شوی ستارگان | سانس 26 دوشنبه 16 مرداد 1402:
            </p>
            <table className="w-full mx-auto mt-5 text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b rounded-lg">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ردیف
                  </th>
                  <th scope="col" className="px-6 py-3">
                    عنوان
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد
                  </th>
                  <th scope="col" className="px-6 py-3">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 bg-gray-100 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">اکونومی | ECO</td>
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">12،700،000</td>
                  <td className="px-6 py-4">
                    <button>
                      <ion-icon
                        className="w-8 h-8 text-red-500"
                        name="trash-outline"
                      ></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!-- subject --> */}
            <p className="mt-5 font-bold text-center text-gray-500">
              رستوران شاندیز | سانس شام سه شنبه 17 مرداد 1402
            </p>
            <table className="w-full mx-auto mt-5 text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b rounded-lg">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ردیف
                  </th>
                  <th scope="col" className="px-6 py-3">
                    عنوان
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد
                  </th>
                  <th scope="col" className="px-6 py-3">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 bg-gray-100 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">هزینه رزرو</td>
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">18،700،000</td>
                  <td className="px-6 py-4">
                    <button>
                      <ion-icon
                        className="w-8 h-8 text-red-500"
                        name="trash-outline"
                      ></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <!-- subject --> */}
            <p className="mt-5 font-bold text-center text-gray-500">
              کشتی تفریحی آرتمس پلاس | کشتی آرتمیس 21:00 الی 2:00 چهارشنبه 18
              مرداد 1402
            </p>
            <table className="w-full mx-auto mt-5 text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 border-b rounded-lg">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ردیف
                  </th>
                  <th scope="col" className="px-6 py-3">
                    عنوان
                  </th>
                  <th scope="col" className="px-6 py-3">
                    تعداد
                  </th>
                  <th scope="col" className="px-6 py-3">
                    قیمت
                  </th>
                  <th scope="col" className="px-6 py-3">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-700 bg-gray-100 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-700 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">کشتی آرتمیس با پذیرایی</td>
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">43،800،000</td>
                  <td className="px-6 py-4">
                    <button>
                      <ion-icon
                        className="w-8 h-8 text-red-500"
                        name="trash-outline"
                      ></ion-icon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />

          {/* <!-- button --> */}
          <div className="flex justify-center">
            <button className="mt-6 w-[70%] bg-green-400 p-2 rounded-md border border-green-400 hover:bg-transparent hover:text-black duration-200">
              <ion-icon
                className="relative top-[2px]"
                name="bag-check-outline"
              ></ion-icon>
              نهایی کردن خرید
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default CartPopUpMenu;
