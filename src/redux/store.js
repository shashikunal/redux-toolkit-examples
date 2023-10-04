import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postsReducer from "./posts/postSlice";
import productReducer from "./productSlice/productSlice";
import authReducer from "./auth/authSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    products: productReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
