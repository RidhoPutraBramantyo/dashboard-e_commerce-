// /store/index.js
import { createStore } from "redux";
import rootReducer from "./reducers/index"; // Anda perlu membuat reducer terlebih dahulu

const store = createStore(rootReducer);

export default store;
