import React from "react";
import { useCart } from "../Context/CartContext";
import Navbar from "../Components/Navbar/Navbar";
import "./UserCart.css"

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  return (
    <>
      <Navbar />
      <div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your Cart is Empty</p>
        ) : (
          <div className="section">
            {cartItems.map((item) => {
              return (<>
               <div className="display">
                  <div>
                    <div>
                      <img src={item.catImg} alt="" />
                    </div>
                    <div>
                      <h5>{item.productName}</h5>
                    </div>
                    <div>
                      <h2>Price : Rs:{item.price}/-</h2>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
                <div><button>Checkout</button></div>
                </>
               
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
