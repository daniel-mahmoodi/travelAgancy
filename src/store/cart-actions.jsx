import { uiActions } from "./Ui-slice";
import { cartActions } from "./cart-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const sendRemovedTickets = (token, tickets) => {
  const url = `${apiUrl}/Basket/RemoveTickets`;
  return async (dispatch) => {
    let deletedTiketsData = { show: true, id: tickets.id };
    console.log("deletedTiketsData", deletedTiketsData);
    dispatch(cartActions.toggleDeleteTicketLoading(deletedTiketsData));
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
        deletedTiketsData = { show: false, id: tickets.id };
        console.log("deletedTiketsData", deletedTiketsData);
        dispatch(cartActions.toggleDeleteTicketLoading(deletedTiketsData));
        // dispatch(cartActions.toggleDeleteTicketLoading(false, tickets.id));
        // dispatch(uiActions.toggleSequenceModal());
        // dispatch(cartActions.eraseTicketsFromUserOrder(tickets.id));
        dispatch(fetchCartData(token));
      })
      .catch((error) => {
        // dispatch(cartActions.toggleDeleteTicketLoading(true, tickets.id));
        deletedTiketsData = { show: true, id: tickets.id };
        console.log("deletedTiketsData", deletedTiketsData);
        dispatch(cartActions.toggleDeleteTicketLoading(deletedTiketsData));
        console.log("error", error);
        // dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
export const fetchCartData = (token) => {
  return async (dispatch) => {
    // IMPORTANT TO KNOWL:
    // i comented bellow disputch because i dont whant to see refresh tikets in cart modal
    //  and send bellow dispatch to useEffect in cartPop up component:
    // dispatch(cartActions.toggleCartLoading(true));
    axios({
      method: "GET",
      url: `${apiUrl}/Basket/GetBasket`,
      headers: {
        accept: "*/*",
        Authorization: token,
      },
    })
      .then((response) => {
        // dispatch(cartActions.toggleUserHasCart(true));
        if (response.data) {
          dispatch(cartActions.toggleUserHasCart(true));
        }
        dispatch(cartActions.toggleCartLoading(false));
        dispatch(cartActions.addFetchedUserCartItems(response.data));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(cartActions.toggleCartLoading(true));
      });
  };
};

export const sendUserNewCartData = (token, specs) => {
  const url = `${apiUrl}/Basket/CreateBasket`;
  return async (dispatch) => {
    dispatch(cartActions.toggleCreateCartLoading(true));
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
        dispatch(uiActions.toggleNewPaymentModal());
        dispatch(cartActions.toggleUserHasCart(true));
      })
      .catch((error) => {
        console.log("error", error.response.data, error.response.status);
        console.log("error", error);
        if (error.response.status === 423) {
          dispatch(cartActions.toggleUserHasCart(true));
        } else {
          dispatch(cartActions.toggleUserHasCart(false));
        }
        dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
export const sendTicketOrderData = (token, items) => {
  const url = `${apiUrl}/Basket/AddTickets`;
  return async (dispatch) => {
    dispatch(cartActions.toggleSendTicketLoading(true));
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
    // console.log("sendCartItems", sendCartItems, items);
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
        dispatch(uiActions.toggleSequenceModal());
        dispatch(cartActions.eraseAllTickets());
        dispatch(cartActions.toggleSendTicketLoading(false));
        dispatch(fetchCartData(token));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(cartActions.toggleSendTicketLoading(true));
        if (error.response.data === "سبد خرید شما منقضی شده است.") {
          dispatch(cartActions.toggleUserHasCart(false));
          // dispatch(uiActions.toggleNewPaymentModal());
        }
        dispatch(uiActions.showWarning(error.response.data));
      });
  };
};
