import { uiActions } from "./Ui-slice";
import { cartActions } from "./cart-slice";
import axios from "axios";


const tickets = [
     {
       "id": 3,
       "ticketId": 3,
       "ticketTitle": "پاراسل",
       "sansTitle": "سانس روز",
       "sansId": "3",
       "executeDate": "9/12/2023 12:00:00 AM",
       "count": 20
     },
     {
       "id": 4,
       "ticketId": 4,
       "ticketTitle": "پاراسل",
       "sansTitle": "سانس شب",
       "sansId": "4",
       "executeDate": "9/12/2023 12:00:00 AM",
       "count": 1
     },
     {
       "id": 5,
       "ticketId": 5,
       "ticketTitle": "پاراسل",
       "sansTitle": "سانس روز",
       "sansId": "5",
       "executeDate": "9/13/2023 12:00:00 AM",
       "count": 1
     },
     {
       "id": 6,
       "ticketId": 9,
       "ticketTitle": "بنانا",
       "sansTitle": "سانس روز",
       "sansId": "3",
       "executeDate": "9/12/2023 12:00:00 AM",
       "count": 2
     }
   ];
   
   // Create a Map to store the grouped items
   const groupedItems = new Map();
   
   // Iterate through the tickets array
   for (const ticket of tickets) {
     const key =`${ticket.sansId}-${ticket.executeDate}`;
     
     // Check if the key exists in the Map
     if (!groupedItems.has(key)) {
       // If not, create a new array for this key
       groupedItems.set(key, []);
     }
     
     // Add the ticket to the corresponding group
     groupedItems.get(key).push(ticket);
   }
   
   // Convert the Map values to an array of grouped items
   const groupedArray = Array.from(groupedItems.values());
   
   console.log('groupedArray',groupedArray);






export const fetchCartData = (Token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        // `${}api/Cart/GetCart?access_token=${Token}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
     
      let totalPrice = 0;
      cartData.items.map((item) =>
        item.product.price === item.product.discountedPrice
          ? (totalPrice = totalPrice + item.product.price * item.quantity)
          : (totalPrice =
              totalPrice + item.product.discountedPrice * item.quantity)
      );
      let totalQuantity = 0;
      cartData.items.map(
        (item) => (totalQuantity = totalQuantity + item.quantity)
      );
      const totalDiscountedPrice = cartData.totalDiscountedAmount;

      dispatch(
        cartActions.replaceCart({
          cartState: {
            cartData,
            totalPrice,
            totalQuantity,
            totalDiscountedPrice,
          } || {
            cartData: { items: [] },
            totalPrice: 0,
            totalQuantity: 0,
            totalDiscountedPrice: 0,
          },
        })
      );
      dispatch(cartActions.compareServerAndLocalItems(true))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "خطا!",
          message: "دریافت سبد خرید از سرور موفق نبود ",
        })
      );
    }
  };
};

export const sendCartData = (cart, Token) => {
  return async (dispatch) => {
    let sendCartItems = { couponCode: null, items: [] };

    const newItems = cart.items.items?.filter(
      (item) => item.quantity !== 0
    );
    // console.log("newItems", newItems);
    if (newItems.length !== 0) {
      newItems.map((item) => {
        return sendCartItems.items.push({
          productId: item.product.id,
          quantity: item.quantity,
        });
      });
    } else {
      // sendCartItems.items = [{quantity: 0 }];
      // console.log("newItems", newItems);
      // console.log("sendCartItems", sendCartItems);
    }
    // console.log("sendCartItems", sendCartItems);

    axios({
      method: "post",
      // url: `${baseURL}api/Cart/AddCart?access_token=${Token}`,
      data: sendCartItems,
      headers: { "Content-Type": " application/json" },
    })
      .then((response) => {
        dispatch(cartActions.receivedData(true));
      })
      .catch((error) => console.log("error", error));
  };
};

export const sendCartDataForCouponCode = (
  cart,
  coupon,
  Token
) => {
  return async (dispatch) => {
    let sendCartItems = { couponCode: coupon, items: [] };
    const newItems = cart.items.items?.filter(
      (item) => item.quantity !== 0
    );

    newItems?.map((item) => {
      return sendCartItems.items.push({
        productId: item.product.id,
        quantity: item.quantity,
      });
    });
    coupon
      ? dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "درحال بررسی کد تخفیف شما",
            message: "",
          })
        )
      : dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "درحال لغو کد تخفیف شما",
            message: "",
          })
        );
    axios({
      method: "post",
      // url: `${baseURL}api/Cart/AddCart?access_token=${Token}`,
      data: sendCartItems,
      headers: { "Content-Type": " application/json" },
    })
      .then((response) => {
        const totalDiscountedAmount = response.data.totalDiscountedAmount;
        dispatch(
          cartActions.changeTotalDiscountedAmountAfterAddingCoupon(
            totalDiscountedAmount
          )
        );
        coupon
          ? dispatch(cartActions.toggleCouponButton(false))
          : dispatch(cartActions.toggleCouponButton(true));
        coupon
          ? dispatch(
              uiActions.showNotification({
                status: "success",
                title: "کد تخفیف اعمال شد",
                message: "",
              })
            )
          : dispatch(
              uiActions.showNotification({
                status: "success",
                title: "کد تخفیف شما لغو شد",
                message: "",
              })
            );
      })
      .catch((error) => {
        coupon
          ? dispatch(
              uiActions.showNotification({
                status: "error",
                title: "کد تخفیف تایید نشد",
                message: error.response.data,
              })
            )
          : dispatch(
              uiActions.showNotification({
                status: "error",
                title: "کد تخفیف لغو نشد",
                message: error.response.data,
              })
            );
        // console.log("error", error.response.data);
      });
  };
};

export const fetchFavoriteCartData = (Token) => {
  return async (dispatch) => {
    const fetchFavoriteData = async () => {
      const response = await fetch(
        // `${baseURL}api/User/GetFavoriteProducts?access_token=${Token}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      //console.log("fetchFavoriteData::", data);
      //  benazaram in data bayad ba map() check shavad k be ezaye har id k
      //  daryaft mikonim product an ra peyda konim, chon in data etelaate
      //  kameli product ra nadarad.
      return data;
    };

    try {
      const favoriteCartData = await fetchFavoriteData();
      // handle totalPrice by any fetch request

      // let totalPrice = 0;
      // favoriteCartData.items.map(
      //   (item) =>
      //     (totalPrice = totalPrice + item.product.price * item.quantity)
      // );
      dispatch(uiActions.fetchingFavoriteDataIssuccessfull(true));
      dispatch(
        cartActions.replaceFavoriteCart({
          favoriteCartState: { favoriteCartData } || {
            favoriteCartData: [],
          },
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "خطا!",
          message: "برای ایجاد مورد علاقه باید ابتدا لاگین کنید",
        })
      );
    }
  };
};

export const sendFavoriteCartData = (id, Token) => {
  return async () => {
    const bodyFormData = new FormData();
    bodyFormData.append("ProductId", id);
    //console.log("sendfavoriteCartData", id);
    axios({
      method: "post",
      // url: `${baseURL}api/User/AddFavoriteProduct?access_token=${Token}`,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
};
