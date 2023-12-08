import React from "react";
import "./ordertable.css"; // Pastikan file ini ada atau hapus baris ini jika tidak digunakan

const orders = [
  { id: 1, customer: "Pelanggan 1", total: "$100" },
  { id: 2, customer: "Pelanggan 2", total: "$150" },
  // Tambahkan lebih banyak pesanan jika diperlukan
];

const OrderTable = () => {
  return (
    <div className="order-table my-3">
      <h2 className="text-secondary">Tabel Pesanan</h2>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Pelanggan</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
