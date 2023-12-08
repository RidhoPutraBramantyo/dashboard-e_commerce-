// reducers/index.js
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  // Tambahkan reducer lain sesuai kebutuhan
});

export default rootReducer;
