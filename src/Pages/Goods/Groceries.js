import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Groceries.css";
import { useCart } from "../../Context/CartContext";

const Groceries = () => {
  const [data, setData] = useState([]);
  const [list, setList] = useState(0);
  const { addToCart, cartItem } = useCart();
  // const cartItemCount = cartItem;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/product.json");
        const newData = await response.json();
        const arr1 = Object.entries(newData).map(([key, value]) => ({
          key,
          value,
        }));
        setData(arr1[0].value[list]);
        //console.log(arr1[1]) 
        //arr1[1] indicates the reviews
        // array[0] means data of products which displays the array available products in array like ghee,pulses....
        // list indicates the groceries,electronics,fashion
        console.log(arr1[0].value[list]) 
      } catch (error) {
        console.error(error); 
        setData([]);
      }
    };
    fetchData();
  }, []);
  //   console.log(data)
  // Value indicates the groceries
      //value.cat_name gives only Groceries
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
            {Object.entries(value).map(([key, value]) => (
              <div className="product-list">
                {value.products &&
                  value.products.map((item) => (
                    <div className="section-items">
                      <h4>{value.cat_name}</h4>
                      <img src={item.catImg} alt="" />
                      <h4>{item.productName}</h4>
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

export default Groceries;
