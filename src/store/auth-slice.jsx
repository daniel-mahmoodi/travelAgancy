import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  token: "",
  phoneNumber: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    replaceUserInfo(state) {
      state.token = "";
      state.phoneNumber = "";
      state.isLoggedIn = false;
    },
    login(state, action) {
      state.isLoggedIn = true;
      state.token = `Bearer ${action.payload}`;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
    addPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
