import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  token:
    "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZGFuaWFsIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiYjkxY2VmZDYtOWQ5Mi00MTA4LTliMDItZjFmODY5NDU4MTQwIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWdlbmN5IiwiZXhwIjoxNjk1MDYwNDIxLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwNTgvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MDU4LyJ9.oCxSyidT_zi71qhsSJG4IW8RG_gS1A13qzQW0v56_DU",
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
       state.token = action.payload;
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
