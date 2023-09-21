import { createSlice } from "@reduxjs/toolkit";

const initialWalletState = {
     walletWouldChargedAmount:0
}
const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWalletState,
  reducers: {
     addAmountUserCharged(state, action) {
      state.walletWouldChargedAmount = action.payload
    },
  },
});
export const walletActions = walletSlice.actions;
export default walletSlice.reducer;
