import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [ cartItems , setCartItems] = useState([]);

    const addToCart = (item)=>{
        setCartItems([...cartItems , item])
      //  setCartItems((prev) => ({ ...prev, [item]: prev[item] + 1 }));

    }
    const removeFromCart = (item)=>{
        setCartItems(cartItems.filter((items)=> items != item))
            //  setCartItems((prev) => ({ ...prev, [item]: prev[item] - 1 }));

    }

    return(
        <CartContext.Provider value={{ cartItems , addToCart , removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(CartContext)
}