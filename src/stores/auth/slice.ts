import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type State = {
  isLogin: boolean;
  userInfo: {
    userId: number | null;
    userName: string | null;
  };
};

const initialState: State = {
  isLogin:
    !!localStorage.getItem("JWT") &&
    localStorage.getItem("JWT") !== "SESSION-TIME-OUT",
  userInfo: {
    userId: null,
    userName: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<{ isLogin: boolean }>) => {
      const { isLogin } = action.payload;
      return {
        ...state,
        isLogin,
      };
    },
    setloginUserInfo: (
      state,
      action: PayloadAction<{ userId: number; userName: string }>,
    ) => {
      const { userId, userName } = action.payload;
      return {
        ...state,
        userInfo: { userId, userName },
      };
    },
  },
});

export const { setIsLogin, setloginUserInfo } = authSlice.actions;

export default authSlice.reducer;
