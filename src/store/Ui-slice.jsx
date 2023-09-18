import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    // cartIsVisible: false,
    // notification: null,
    // notificationIsShowing: true,
    cartModalPopUp: false,
    sequenceModalPopUp: false,
    newPaymentModalPopUp: false,
    sideBarVisibile: false,
    warningDesc: "",
    warningIsVisible: false,
    scrollYBackGround: true,
    // authUpdateModalPopUp: false,
    // commentToStoreModalPopUp: false,
    // hamburgerModalPopUp: false,
    // infoModalPopUp: false,
    // commentPopUp: false,
    // addressModalPopUp: false,
    // paymentModalPopUp: false,
    // sendingDataToServerWasSuccessfull: false,
    // FavoriteDataIssuccessfullyReceived: false,
  },
  reducers: {
    // toggle(state) {
    //   state.cartIsVisible = !state.cartIsVisible;
    // },
    // showNotification(state: any, action) {
    //   state.notification = {
    //     status: action.payload.status,
    //     title: action.payload.title,
    //     message: action.payload.message,
    //   };
    // },
    // showNotificationInTimer(state: any, action) {
    //   state.notificationIsShowing = action.payload
    // },
    toggleCartModal(state) {
      state.cartModalPopUp = !state.cartModalPopUp;
    },
    toggleSequenceModal(state) {
      state.sequenceModalPopUp = !state.sequenceModalPopUp;
      if (state.sequenceModalPopUp) {
        state.scrollYBackGround = false;
      } else {
        state.scrollYBackGround = true;
      }
    },
    toggleNewPaymentModal(state) {
      state.newPaymentModalPopUp = !state.newPaymentModalPopUp;
    },
    toggleSideBarVisibility(state, action) {
      state.sideBarVisibile = action.payload;
    },
    showWarning(state, action) {
      state.warningDesc = action.payload;
      state.warningIsVisible = true;
    },
    hideWarning(state) {
      state.warningIsVisible = false;
      state.cartModalPopUp = false;
      state.sequenceModalPopUp = false;
      state.newPaymentModalPopUp = false;
    },
    // toggleUpdateUserModal(state) {
    //   state.authUpdateModalPopUp = !state.authUpdateModalPopUp;
    // },
    // toggleCommentToStoreModal(state) {
    //   state.commentToStoreModalPopUp = !state.commentToStoreModalPopUp;
    // },
    // toggleHambargerModal(state) {
    //   state.hamburgerModalPopUp = !state.hamburgerModalPopUp;
    // },
    // infoModalPopUp(state) {
    //   state.infoModalPopUp = !state.infoModalPopUp;
    // },
    // addCommentPopUp(state) {
    //   state.commentPopUp = !state.commentPopUp;
    // },
    // addressModalPopUp(state) {
    //   state.addressModalPopUp = !state.addressModalPopUp;
    // },
    // paymentModalPopUpToggle(state,action) {
    //   state.paymentModalPopUp = action.payload;
    // },
    // sendUserToHome(state,action) {
    //   state.sendingDataToServerWasSuccessfull = action.payload
    // },
    // fetchingFavoriteDataIssuccessfull(state,action) {
    //   state.FavoriteDataIssuccessfullyReceived = action.payload
    // },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
