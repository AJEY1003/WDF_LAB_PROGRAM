import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // this matches state.counter
  },
});

export default store;

