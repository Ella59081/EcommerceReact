import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartNumber, setCartNumber ] = useState(0)
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        setCart((prev) =>[
            ...prev, product

            
        ])
        setCartNumber((prev) => prev + 1)
        console.log(cart)
    }

    const deleteCartItem = (id) =>{
        // cart.filter((_,i) => i !== index)
        setCart((prev) => prev.filter((item) => item.id !== id))
        setCartNumber((prev) => prev - 1)
    }

    let sum = 0
    let i = cart.index
    for(i = 0; i < cart.length; i++){
        sum += cart[i].price
    }

    return(
        <CartContext.Provider value ={{cartNumber, cart, addToCart, deleteCartItem, sum}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

