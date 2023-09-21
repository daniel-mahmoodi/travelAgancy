import React, { useEffect } from "react";
import StoreBoxInfo from "./StoreBoxInfo";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import Cards from "./Cards";
import PaymentModal from "./PaymentModal";
import Category from "../WorkGroup/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../../store/cart-actions";
const BuyingTickets = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(fetchCartData(token));
  }, [dispatch, token]);
  return (
    <div>
      <Category />
      <StoreBoxInfo />
      <main className="mt-5 bg-white border-0 shadow-none main-content lg:shadow-md lg:border">
        <Cards />
        <FrequentlyAskedQuestions />
      </main>
      <PaymentModal />
    </div>
  );
};

export default BuyingTickets;
