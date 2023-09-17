import { uiActions } from "./Ui-slice";
import { cartActions } from "./cart-slice";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export const sendTicketOrderData = (token, items) => {
  const url = `${apiUrl}/Basket/AddTickets`;
  console.log("sendfavoriteCartData", token, items);
  return async (dispatch) => {
    let sendCartItems = { items: [] };
    const newItems = items?.filter((item) => item.count !== 0);
    if (newItems.length !== 0) {
      newItems.map((item) => {
        return sendCartItems.items.push({
          ticketId: item.id,
          count: item.count,
        });
      });
    }
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
      })
      .catch((error) =>
        // console.log("error", error.response.data, error.response.status)
        dispatch(uiActions.showWarning(error.response.data))
      );
  };
};
// fetchTicketsbySans




