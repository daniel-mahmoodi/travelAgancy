import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import useCheckStock from "../../Hooks/useCheckStock";

const IncreaseDecreaseButton = ({ data }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { id, capacity, reservedTemporary } = data;
  const checkStockHook = useCheckStock(id, capacity, reservedTemporary);
  // console.log("IncreaseDecreaseButton  data", data, items,id, capacity, reservedTemporary,checkStockHook);
  // const LoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //  const checkStockHook = useCheckStock(id);
  const currentItem = items?.find((item) => item.ticketId === id);
  //  const existingCartItemPlusOneItem = cartItemPlusOneItem ? true : false;
  const increaseItemHandler = () => {
    console.log("increase");
    if (checkStockHook > 0) dispatch(cartActions.addTicketToUserOrder(id));
  };

  const deacreseItemHandler = () => {
    console.log("decrease");
    if (currentItem) {
      dispatch(cartActions.removeTicketToUserOrder(id));
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={increaseItemHandler}
        className="increase-button flex justify-center items-center"
        data-id="1"
      >
        <ion-icon class="text-xl" name="add-circle"></ion-icon>
      </button>
      {/* <span className="counter" className="text-sm" data-id="1"> */}
      <span
        className="font-black text-base flex justify-center items-center w-4"
        data-id="1"
      >
        {currentItem ? currentItem.count : 0}
      </span>
      {/* <input
        type="hidden"
        className="counter"
        name="counter"
        data-id="1"
        value="0"
      /> */}

      <button
        onClick={deacreseItemHandler}
        className="decrease-button flex justify-center items-center"
        data-id="1"
      >
        <ion-icon class="text-xl " name="remove-circle"></ion-icon>
      </button>
    </div>
  );
};

export default IncreaseDecreaseButton;
