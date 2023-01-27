import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import createSagaMiddleware from "@redux-saga/core";
import catsReducer from "./catSlice";
import { catSaga } from "./catSaga";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cats: catsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(catSaga);
