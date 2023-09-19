import { uiActions } from "./Ui-slice";
import { cartActions } from "./cart-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const sendRemovedTickets = (token, tickets) => {
  const url = `${apiUrl}/Basket/RemoveTickets`;
  return async (dispatch) => {
    let sendCartItems = { items: [] };
    if (tickets.length !== 0) {
      sendCartItems.items.push({
        basketItemTicketId: tickets.id,
        count: tickets.count,
      });
    }
    console.log("sendCartItems", sendCartItems, tickets);
    axios({
      method: "POST",
      url: url,
      data: sendCartItems,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        console.log("response", response);
        // dispatch(uiActions.toggleSequenceModal());
        // dispatch(cartActions.eraseTicketsFromUserOrder(tickets.id));
        dispatch(fetchCartData(token));
      })
      .catch((error) => {
        console.log("error", error);
        // dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
export const fetchCartData = (token) => {
  return async (dispatch) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Basket/GetBasket`,
      headers: {
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        dispatch(cartActions.toggleUserHasCart(true));
        dispatch(
          cartActions.addFetchedUserCartItems(response.data.basketItems)
        );
      })
      .catch((error) => console.log("error", error));
  };
};

export const sendUserNewCartData = (token, specs) => {
  const url = `${apiUrl}/Basket/CreateBasket`;
  console.log("sendfavoriteCartData", token, specs, specs.fullName);
  return async (dispatch) => {
    const bodyFormData = new FormData();
    bodyFormData.append("FullName", specs.fullName);
    bodyFormData.append("MobileNumber", specs.mobileNumber);
    bodyFormData.append("FactorId", specs.factorId);
    bodyFormData.append("EmailAddress", specs.emailAddress);
    bodyFormData.append("ResidenceLocation", specs.residenceLocation);
    bodyFormData.append("Description", specs.description);

    axios({
      method: "POST",
      url: url,
      data: bodyFormData,
      headers: {
        "Content-Type": " multipart/form-data",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        console.log("response", response);
        dispatch(uiActions.toggleNewPaymentModal());

      })
      .catch((error) => {
        console.log("error", error.response.data, error.response.status);
        console.log("error", error);

        dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
export const sendTicketOrderData = (token, items) => {
  const url = `${apiUrl}/Basket/AddTickets`;
  console.log("sendfavoriteCartData", items);
  return async (dispatch) => {
    let sendCartItems = { items: [] };
    const newItems = items?.filter((item) => item.count !== 0);
    if (newItems.length !== 0) {
      newItems.map((item) => {
        return sendCartItems.items.push({
          ticketId: item.ticketId,
          count: item.count,
        });
      });
    }
    console.log("sendCartItems", sendCartItems, items);
    axios({
      method: "POST",
      url: url,
      data: sendCartItems,
      headers: {
        "Content-Type": " application/json",
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        console.log("response", response);
        dispatch(uiActions.toggleSequenceModal());
        dispatch(cartActions.eraseAllTickets());
      })
      .catch((error) => {
        console.log("error", error.response.status);
        if (error.response.data === 'سبد خرید شما منقضی شده است.') {
          dispatch(cartActions.toggleUserHasCart());
          // dispatch(uiActions.toggleNewPaymentModal());
        }
        dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
