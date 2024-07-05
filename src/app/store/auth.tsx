import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../models/User";
import type UserType from "../models/User";

import { RootState } from ".";
interface AuthState {
  phoneVerifyToken?: string;
  userToken?: string;
  user?: UserType;
}
const initialState: AuthState = {
  phoneVerifyToken: undefined,
  userToken: undefined,
  user: undefined,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updatePhoneVarify: (state, action: PayloadAction<string | undefined>) => {
      state.phoneVerifyToken = action.payload;
    },
    updateUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string | undefined>) => {
      state.userToken = action.payload;
    },
  },
});

export const { updatePhoneVarify, setUserToken, updateUser } =
  authSlice.actions;
export const selectPhoneVarify = (state: RootState) =>
  state.auth.phoneVerifyToken;
export const selectUser = (state: RootState) => {
  // console.log("selectUser:", state.auth.user);
  return new User(state.auth.user);
};
export const selectUserToken = (state: RootState) => state.auth.userToken;
export default authSlice.reducer;
