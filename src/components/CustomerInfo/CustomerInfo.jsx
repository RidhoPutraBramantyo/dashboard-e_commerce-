import React from "react";
import customerInfoData from "../../store/fakedata/customerInfo.json";

const CustomerInfo = () => {
  const customerInfo = customerInfoData.customerInfo;

  return (
    <div className="card my-3 bg-light">
      <div className="card-body">
        <h2 className="card-title text-primary">Informasi Pelanggan</h2>
        <p className="card-text">
          <strong>Nama:</strong> {customerInfo.name}
        </p>
        <p className="card-text">
          <strong>Email:</strong> {customerInfo.email}
        </p>
        <p className="card-text">
          <strong>Alamat:</strong> {customerInfo.address}
        </p>
        <p className="card-text">
          <strong>Kota:</strong> {customerInfo.city}
        </p>
        <p className="card-text">
          <strong>Kode Pos:</strong> {customerInfo.zipcode}
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
