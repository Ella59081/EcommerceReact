import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartNumber, setCartNumber ] = useState(0)
    const [cart, setCart] = useState([])

    const addToCart = (product) =>{
        // setCart((prev) =>[
        //     ...prev, {product, quantity: 1}

            
        // ])
        // setCartNumber((prev) => prev + 1)
        // console.log(cart)

        setCart((prev) =>{

        //    if(prev[0].quantity >= prev[0].product.qtyLeft){ 
        //         console.log(prev)
            
            const alreadyExists = prev.find(item => item.product.id
                === product.id
            );
            if(alreadyExists){
                return prev.map(item => item.product.id === 
                    product.id ? {...item, quantity : item.quantity+ 1}
                    : item
                )
            }else{
                setCartNumber((prev) => prev + 1)
                return [...prev, {product: product, quantity: 1}]
                
            }
        //   }
        //   else{
        //     return
        //   }
        })

        // const addq = () =>{
        //     setCart((prev) =>{
        //         return[...prev, {product, quantity}]
        //     })
        // } 
        console.log(cart)
        
    }

    const deleteCartItem = (idt) =>{
        // cart.filter((_,i) => i !== index)
        setCart((prev) => prev.filter(({product}) => product.id !== idt))
        setCartNumber((prev) => prev - 1)
    }

    const total = cart.reduce((sum, item) =>
        sum + item.product.price * item.quantity, 0
    )

    return(
        <CartContext.Provider value ={{cartNumber, cart, addToCart, deleteCartItem, total}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);

