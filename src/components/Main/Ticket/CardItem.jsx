import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
import { fetchSequenceDataOFSelectedCardItemHandler } from "../../../store/card-actions";
import { fetchCartData } from "../../../store/cart-actions";
import { cardActions } from "../../../store/card-slice";

const CardItem = ({ data }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userHasCart = useSelector((state) => state.cart.userHasCart);
  const { id, title, isActive, imageUrl } = data;
  console.log("data in card", imageUrl, id);
  useEffect(() => {
    // TODO: why fetch cart???
    dispatch(fetchCartData(token));
  }, [dispatch, token]);
  const pushBuyBtn = () => {
    if (userHasCart) {
      dispatch(uiActions.toggleSequenceModal());
      dispatch(fetchSequenceDataOFSelectedCardItemHandler(id, token));
      dispatch(cardActions.setSelectedCardId(id));
    } else {
      dispatch(uiActions.toggleNewPaymentModal());
    }
  };
  return (
    <div className="">
      {/* <!-- card --> */}
      <div className="pb-3 overflow-hidden bg-gray-100 border border-gray-300 rounded-md shadow-md">
        <div className="group relative duration-200 hover:scale-[1.1]">
          <a className="duration-200 group-hover:opacity-40" href="">
            <img
              className="block w-full mx-auto"
              src={`${imageUrl ? imageUrl : "../img/kid-green.jpg"}`}
              alt=""
            />
          </a>
          <div className="absolute opacity-0 group-hover:opacity-100 duration-200 left-[50%] top-[50%] flex justify-center items-center transle-y-[-50%] translate-x-[-50%] w-full">
            <a
              className="bg-blue-400 hover:text-black duration-200 text-white text-[12px] p-2 rounded-md"
              href=""
            >
              اطلاعات بیشتر
            </a>
          </div>
        </div>

        <div className="px-4 mt-10 text-center">
          <button className="bg-blue-400 w-[75%] py-2 px-5 border border-blue-400 duration-200 rounded-md text-white hover:bg-transparent hover:text-black">
            {isActive ? "فعال" : "غیرفعال"}
          </button>
        </div>
        <h6 className="mt-8 text-center text-gray-700">{title}</h6>
        <div className="flex justify-center gap-1 mt-8">
          <div
            onClick={pushBuyBtn}
            title="افزودن به سبد خرید"
            className="text-xl cursor-pointer"
          >
            <ion-icon
              class="p-2 text-white duration-200 bg-gray-400 rounded-full hover:bg-blue-400 hover:text-black"
              name="cart-outline"
            ></ion-icon>
          </div>

          <div title="در مورد محصول" className="text-xl cursor-pointer">
            <ion-icon
              class="p-2 text-white duration-200 bg-gray-400 rounded-full hover:bg-blue-400 hover:text-black"
              name="information-outline"
            ></ion-icon>
          </div>
          <div title="نشانه گذاری" className="text-xl cursor-pointer">
            <ion-icon
              class="p-2 text-white duration-200 bg-gray-400 rounded-full hover:bg-blue-400 hover:text-black"
              name="bookmark-outline"
            ></ion-icon>
          </div>
          <div title="علاقه مندی" className="text-xl cursor-pointer">
            <ion-icon
              class="p-2 text-white duration-200 bg-gray-400 rounded-full hover:bg-blue-400 hover:text-black"
              name="heart"
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
