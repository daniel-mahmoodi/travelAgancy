import React, { useEffect } from "react";
import MainModal from "../MainModal";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
import { fetchCartData } from "../../../store/cart-actions";
import MyCartLoader from "../../Layout/MyCartLoader";
import { cartActions } from "../../../store/cart-slice";
import Cart from "./Cart";
const CartPopUpMenu = () => {
  const token = useSelector((state) => state.auth.token);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const showCartLoading = useSelector((state) => state.cart.showCartLoading);
  console.log("cartModal component", cartItems, showCartLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData(token));
    dispatch(cartActions.toggleCartLoading(true));
  }, [dispatch, token]);
  const hideCartModalHandler = () => {
    dispatch(uiActions.toggleCartModal());
  };
  const finalPurchaseBtn = () => {
    console.log("finalPurchaseBtn");
  };
  return (
    <MainModal hideModalHandler={hideCartModalHandler}>
      <div
        className="fixed top-0 left-0 w-full h-full bg-blue-50/30"
        // style="z-index: 1000; overflow-y: scroll;"
        style={{
          zIndex: 1000,
          overflowY: "auto",
          // display: "none",
        }}
        id="basket"
      >
        <div className="shadow-md max-w-[600px]  mx-auto rounded-md border p-4 mt-10 bg-white">
          <div className="flex items-center justify-between pb-3 font-bold">
            سبد خرید
            <button onClick={hideCartModalHandler}>
              <ion-icon
                class="w-8 h-8 text-red-500"
                name="close-circle-outline"
              ></ion-icon>
            </button>
            {/* className="text-white rounded-full flex justify-center items-center"
              style={{
                backgroundColor: "red",
              }} */}
          </div>
          <hr />
          {showCartLoading ? (
            <div className="flex flex-col justify-center items-center pt-1">
              <MyCartLoader />
              <MyCartLoader />
              <MyCartLoader />
            </div>
          ) : (
            <>
              {cartItems?.length ? (
                <Cart data={cartItems} />
              ) : (
                <p className="text-rose-600 font-bold flex justify-center items-center m-2 p-2">
                  سبد خالی است
                </p>
              )}
            </>
          )}
          <hr />
          <div onClick={finalPurchaseBtn} className="flex justify-center">
            {cartItems?.length ? (
              <button className="mt-6 w-[70%] bg-green-400 p-2 rounded-md border border-green-400 hover:bg-transparent hover:text-black duration-200">
                <ion-icon
                  class="relative top-[2px]"
                  name="bag-check-outline"
                ></ion-icon>
                نهایی کردن خرید
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default CartPopUpMenu;
