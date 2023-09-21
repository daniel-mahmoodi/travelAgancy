import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/Ui-slice";
import { fetchListOfEvents } from "../../../store/category-actions";
import "../../../myStyles.css";
import useDateConverter from "../../Hooks/useDataConverter";
import TicketExpiringTimer from "./TicketExpiringTimer";
const StoreBoxInfo = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const cartData = useSelector((state) => state.cart.cartItems);
  const createdAt = useSelector((state) => state.cart.createdAt);
  const [convertedDate, setConvertedDate] = useState("");
  const { hour, minute, second } = useDateConverter(convertedDate);
  useEffect(() => {
    if (createdAt) {
      setConvertedDate(createdAt);
    }
  }, [createdAt]);
  // 2023-09-18T22:50:16.1703053
  // Given time string
  // const givenTimeStr = '02:20:16';

  // Parse the given time string to create a Date object
  const givenTime = new Date(`${createdAt}Z`);

  // Add 30 minutes to the Date object
  givenTime.setMinutes(givenTime.getMinutes() + 30);

  // Get the current time
  const currentTime = new Date();

  // Format the Date objects as strings
  const formattedGivenTime = givenTime.toLocaleTimeString(); // Format: "HH:MM:SS"
  const formattedCurrentTime = currentTime.toLocaleTimeString(); // Format: "HH:MM:SS"

  console.log("Given Time:", formattedGivenTime);
  console.log("Current Time:", formattedCurrentTime);
  const expierdBasket = formattedGivenTime > formattedCurrentTime;
  const expirationTime = formattedGivenTime;
  console.log("cardata", expierdBasket);

  let numberOfSanses = 0;
  let priceOfTickets = 0;
  let numberOfTickets = 0;
  for (let cart of cartData) {
    numberOfSanses += cart.tickets.length;
    for (let ticket of cart.tickets) {
      numberOfTickets += ticket.count;
      priceOfTickets += ticket.count * ticket.price;
    }
  }
  const eventID = useSelector((state) => state.category.eventID);
  const isRotate = useSelector((state) => state.category.showEventsLoading);
  const showCart = () => {
    dispatch(uiActions.toggleCartModal());
  };
  const refetchListOfEventsData = () => {
    dispatch(fetchListOfEvents(eventID, token));
  };
  return (
    <div className="flex justify-center mb-8 mr-0 ml-0 lg:mr-[300px] lg:ml-[40px]">
      <div className="p-6 w-full top-0 mx-auto flex flex-wrap justify-center items-center gap-2 border bg-[#3855bb] border-gray-300 shadow-lg rounded-md">
        <div className="flex justify-between gap-2 h-10">
          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="calendar-outline"></ion-icon>
            تعداد سانس ها : {numberOfSanses}
          </div>

          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="ticket-outline"></ion-icon>
            تعداد بلیط ها : {numberOfTickets}
          </div>

          <div className="bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white">
            <ion-icon name="cash-outline"></ion-icon>
            مجموع : {priceOfTickets.toLocaleString()}
          </div>
        </div>
        <div className="flex h-10 gap-2 mt-0">
          <Link
            to="/"
            className=" badge-store relative bg-green-500 text-white duration-200 flex items-center gap-2 py-1 text-[12px] px-2 rounded-full"
          >
            <ion-icon name="cart-outline"></ion-icon>
            خرید نهایی
          </Link>

          <button className="flex badge-store_green relative text-white bg-red-500 items-center gap-2 py-1 text-[12px] px-2 rounded-full">
            <ion-icon name="cart-outline"></ion-icon>
            کنسل سبد خرید
          </button>

          <div
            className=" bg-[#4576ef] flex items-center gap-2 py-1 text-[12px] px-2 rounded-full text-white"
            style={{ width: "88px" }}
          >
            <div className="w-12 flex justify-center items-center">
              <ion-icon name="time-outline"></ion-icon>
            </div>
            {/* 28:54 */}
            <TicketExpiringTimer expirationTime={expirationTime} />
          </div>
        </div>
        <div className="flex justify-center top-[3px] gap-2 ">
          <button
            onClick={refetchListOfEventsData}
            className={`${
              isRotate ? "my-rotate-360" : ""
            } rounded-full text-white bg-[#4576ef] p-2 h-8 w-8`}
          >
            <ion-icon title="بارگذاری مجدد" name="repeat-outline"></ion-icon>
          </button>
          <button
            onClick={showCart}
            className="p-2 h-8 w-8 text-white bg-red-500 rounded-full"
          >
            <ion-icon title="سبد خرید" name="bag-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreBoxInfo;
