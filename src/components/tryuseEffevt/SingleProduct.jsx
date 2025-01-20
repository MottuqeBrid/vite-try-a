import React from "react";

const SingleProduct = ({ product }) => {
  const { images, title, category, brand, description, thumbnail } = product;
  return (
    <div className="product">
      <img src={thumbnail} />
      <p>
        <small>{title}</small>
      </p>
      <h1>{brand}</h1>
      <h6>{category}</h6>
      <p>{description}</p>
    </div>
  );
};

export default SingleProduct;
