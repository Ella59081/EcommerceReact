import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

function UserCart(){

    const {cartNumber, cart} = useCart()

    return (
        <>
        <div className="ucart-con">
          {
            cart.length === 0 ? 
            <div className="empt">
                Your cart is empty 
                <Link to='/'>Start shopping</Link>
            </div> :
            <div>
                <p>You have {cartNumber} items in your cart</p>
            </div>
          }
        </div>
        </>
    )
}

export default UserCart