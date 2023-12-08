import React, { useState } from "react";
import productsData from "../../store/fakedata/products.json";

const ProductList = () => {
  const initialProducts = productsData.products;
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = () => {
    // Implementasi fungsi menambah produk
    // Contoh: Menambahkan produk baru ke daftar
  };

  return (
    <div className="my-3">
      <h2 className="text-primary">Daftar Produk</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={handleAddProduct}>
        Tambah Produk
      </button>
    </div>
  );
};

export default ProductList;
