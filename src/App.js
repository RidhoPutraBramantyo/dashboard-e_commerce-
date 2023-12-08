import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./components/ProductList/ProductList";
import OrderTable from "./components/OrderTable/OrderTable";
import CustomerInfo from "./components/CustomerInfo/CustomerInfo";
import "bootstrap/dist/css/bootstrap.min.css"; // Impor Bootstrap

const App = () => {
  return (
    <Provider store={store}>
      <div className="App container my-3">
        <div className="row">
          <div className="col-lg-4 mb-3">
            <CustomerInfo />
          </div>
          <div className="col-lg-8">
            <OrderTable />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProductList />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
