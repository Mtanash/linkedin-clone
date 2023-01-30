import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import User from "@/types/user.type";

// Define a type for the slice state
interface CounterState {
  currentUser: User | null;
  accessToken: string | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  currentUser: null,
  accessToken: null,
};

export const counterSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser, setAccessToken } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectAccessToken = (state: RootState) => state.auth.accessToken;

export default counterSlice.reducer;
