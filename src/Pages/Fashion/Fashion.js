import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useCart } from "../../Context/CartContext";


const Fashion = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(2);
  const { addToCart, cartItem } = useCart();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const jsonData = await response.json();
        const dataArray = Object.entries(jsonData).map(([key, value]) => ({
          key,
          value,
        }));
        setData(dataArray[0].value[number]);
        
      } catch (error) {
        console.error(error);
        setData([]);
      }
    };
    fetchData();
  }, [number]);
  Object.entries(data).map(([key, value]) => {
    Object.entries(value).map(([key, value]) => {
      console.log(value);
  
    });
  });
  return (
    <>
      <Navbar />
      <div className="section">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="section-list">
            <h1>{key == "cat_name" && value}</h1>
            {/* <img src={key == "image" && value} alt="" /> */}
            {Object.entries(value).map(([key, value]) => (
              <div className="product-list">
                {/* <h4>{value.cart_name}</h4> */}
                {value.products &&
                  value.products.map((item) => (
                    <div  className="section-items">
                      <h4>{value.cat_name}</h4>
                      <h6>{item.productName}</h6>
                      <img src={item.catImg} alt="" />
                      <p>{item.description}</p>
                      <button onClick={() => addToCart(item)}>
                        Add to Cart  
                      </button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Fashion;
