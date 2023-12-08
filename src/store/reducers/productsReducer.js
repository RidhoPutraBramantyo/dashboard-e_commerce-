// reducers/productsReducer.js
const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      // Logika untuk menambah produk ke state
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    // Tambahkan case lain sesuai kebutuhan
    default:
      return state;
  }
};

export default productsReducer;
