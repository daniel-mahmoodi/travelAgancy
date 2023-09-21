import React, { useEffect, useState } from "react";
import MainModal from "../MainModal";

import { uiActions } from "../../../store/Ui-slice";
import { useDispatch, useSelector } from "react-redux";
import SequenceItems from "./SequenceItems";
import TicketsInSequenceModal from "../../Main/Ticket/TicketsInSequenceModal";
import { sendTicketOrderData } from "../../../store/cart-actions";
import { cartActions } from "../../../store/cart-slice";
import { cardActions } from "../../../store/card-slice";
import { fetchSequenceDataOFSelectedCardItemHandler } from "../../../store/card-actions";
import "../../../../src/myStyles.css";
import MyLoading from "../../Layout/MyLoading";

const SequenceInfo = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const items = useSelector((state) => state.cart.items);
  const showSendingTicketsLoading = useSelector(
    (state) => state.cart.showSendingTicketsLoading
  );
  const selectedCardId = useSelector((state) => state.card.selectedCardId);
  const sequencesItems = useSelector((state) => state.card.sequencesItems);
  const [shortItems, setShortItems] = useState(sequencesItems);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const tickets = useSelector((state) => state.card.tickets);

  const isRotate = useSelector((state) => state.card.reSeqFetchLoading);
  const refetchSequencesItems = () => {
    dispatch(fetchSequenceDataOFSelectedCardItemHandler(selectedCardId, token));
  };

  useEffect(() => {
    if (sequencesItems.length > 1) {
      setShortItems(sequencesItems.slice(0, 1)); //hardo 1 bayad hammeghdar bashand
      setShowMoreBtn(true);
    } else {
      setShortItems(sequencesItems);
      setShowMoreBtn(false);
    }
    dispatch(cardActions.ListOfTicketsFromSelectedSans());
  }, [dispatch, sequencesItems]);

  const hideSequenceModalHandler = () => {
    dispatch(uiActions.toggleSequenceModal());
    dispatch(cartActions.eraseAllTickets());
  };
  const addticketsToCartHandler = () => {
    items.length
      ? dispatch(sendTicketOrderData(token, items))
      : dispatch(uiActions.showWarning("شما هیچ بلیطی را انتخاب نکرده اید."));
  };
  const finalPurchaseBtnHandler = () => {
    items.length
      ? console.log("finalPurchaseBtnHandler")
      : dispatch(uiActions.showWarning("شما هیچ بلیطی را انتخاب نکرده اید."));
  };
  const showAllItemsHandler = () => {
    setShortItems(sequencesItems);
    setShowMoreBtn(false);
    console.log("shortItems", shortItems);
  };
  const showTicketLoading = useSelector(
    (state) => state.card.showTicketLoading
  );

  return (
    <MainModal hideModalHandler={hideSequenceModalHandler}>
      <div
        className="fixed top-0 left-0 w-full h-full bg-blue-50/30 z-30"
        //   //  style="z-index: 1000; overflow-y: scroll; display: none"
        style={{
          zIndex: 1000,
          overflowY: "auto",
          //     display: "none",
        }}
        //   id="selectSansModal"
      >
        <div className="shadow-md max-w-[1200px] mx-auto rounded-md border p-4 bg-white mt-10">
          <div className="flex items-center justify-between mb-5">
            <p className="font-bold">رستوران صفدری ساحلی</p>
            <div>
              <button onClick={hideSequenceModalHandler}>
                <ion-icon
                  class="w-8 h-8 text-red-500"
                  name="close-circle-outline"
                ></ion-icon>
              </button>
              <button
                onClick={refetchSequencesItems}
                className={` ${isRotate ? "my-rotate-360" : ""}`}
              >
                <ion-icon
                  class="w-8 h-8 flex items-center bg-[#4576ef] rounded-full text-white"
                  name="refresh-circle-outline"
                ></ion-icon>
              </button>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-5 mt-10">
            <ol
              className="relative mt-8 mr-8 border-r border-gray-500"
              id="sansList"
            >
              <SequenceItems data={shortItems} />
            </ol>
            {showMoreBtn && (
              <button
                onClick={showAllItemsHandler}
                className="flex items-center justify-center w-full gap-1 p-2 text-white bg-green-400 rounded-md"
                id="more"
              >
                بیشتر
              </button>
            )}
          </div>
          {showTicketLoading ? (
            <div className="flex justify-center items-center py-4">
              <MyLoading />
            </div>
          ) : tickets ? (
            <div className="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-100 uppercase border-b bg-blue-950">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      عنوان
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ظرفیت
                    </th>
                    <th scope="col" className="px-6 py-3">
                      خرید
                    </th>
                    <th scope="col" className="px-6 py-3">
                      کمیسیون
                    </th>
                    <th scope="col" className="px-6 py-3">
                      مبلغ بلیط
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      تعداد
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TicketsInSequenceModal />
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}

          <div className="flex gap-2 mt-8">
            <button
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-green-400 rounded-md"
              //   onClick="hideSansModal();showSelectBank()"
              onClick={finalPurchaseBtnHandler}
            >
              <ion-icon name="cart-outline"></ion-icon>
              خرید نهایی
            </button>
            <button
              onClick={addticketsToCartHandler}
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-blue-400 rounded-md"
            >
              {showSendingTicketsLoading ? (
                <MyLoading />
              ) : (
                <>
                  <ion-icon name="cart"></ion-icon>
                  افزودن به سبد خرید
                </>
              )}
            </button>
            <button
              className="flex items-center justify-center w-full gap-1 p-2 text-white bg-red-400 rounded-md"
              onClick={hideSequenceModalHandler}
            >
              <ion-icon name="close"></ion-icon>
              بستن
            </button>
          </div>
        </div>
      </div>
    </MainModal>
  );
};

export default SequenceInfo;
