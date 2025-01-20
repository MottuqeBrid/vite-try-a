import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const TryUseEffect = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      {data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Data loaded successfully</h1>
          <div className="products">
            {data.products.map((product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
      {/* <p>{data && JSON.stringify(data)}</p> */}
    </div>
  );
};

export default TryUseEffect;
