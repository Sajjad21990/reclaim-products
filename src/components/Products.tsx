import { useState } from "react";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: "/product-1.png",
    },
    {
      id: 2,
      name: "Product 2",
      image: "/product-1.png",
    },
    {
      id: 3,
      name: "Product 3",
      image: "/product-1.png",
    },
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  return (
    <div className="products-container">
      <div className="banner-video-container">
        <video src="/bg-video.mp4" autoPlay muted loop />
      </div>
      <div className="products-content-container">
        <div className="products-content-inner-container">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProductIndex(product.id)}
              className={`products-content-image-container ${selectedProductIndex === product.id ? "selected" : ""}`}
            >
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
        <button className="products-content-button">Buy Now</button>
      </div>
    </div>
  );
};

export default Products;
