// import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, ShowCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.ShowCounter = !state.ShowCounter;
    },
  },
});

const InitialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: InitialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  reducer: { counter: counterSlice.reducer,auth:authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions;
export default store;
// const counterReducer = (state = InitialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       ShowCounter: !state.ShowCounter,
//     };
//   }
//   return state;
// };
