import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
function ProductCard({ product }) {
  const options = {
    value: product.ratings,
    edit: false,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span className="productCardSpan">{`${product.numberOfReviews} Reviews`}</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
}

export default ProductCard;
