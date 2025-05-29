import '../styles/cartPage.css'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

function CartPage(){

    const {cartNumber, cart, deleteCartItem, sum} = useCart()

    return(
        <div className='cart-con'>
            {
                cart.length !== 0 ?
                <div className='shoppingCart'>
                    <h1>Your shopping cart</h1>
                    <div className='Cart'>
                        
                        {
                            cart.map((product, index) =>(
                                <div className='cartItem' key={product.id}>
                                    <div className="product-name">
                                        <Link to={`/products/${product.id}`} className='prod-img'>
                                           <img src={product.images} alt="" />
                                        </Link>
                                        <div className='desc'>
                                            <h3>{product.name}</h3>
                                            <p>{product.brand}</p>
                                        </div>
                                    </div>
                                    <div className="size">Size: {product.sizes}</div>
                                    <div className="quantity">
                                        <button>-</button>
                                        <div className='qnt'>1</div>
                                        <button>+</button>
                                    </div>
                                    <div className="price">${product.price}</div>
                                    <button onClick={() => deleteCartItem(product.id)} className="delete" >
                                        <img src="/src/assets/images/xmark-solid.svg" alt="" />
                                    </button>
                                    
                                </div>
                            ))
                        }
                        
                    </div>
                    <div className="proceed">
                        <div  className="total">
                          <p>Your total <span>${sum}</span></p>
                          <p><span>Discount</span> <span>$0.00</span></p>
                        </div>
                        <a on href="" className="checkOut">Proceed to Checkout</a>
                    </div>
                </div> :
                <div className='emptyCart'>
                  <div>
                    <img src="/src/assets/images/cart-shopping-solid.svg" alt="" />
                    <p>Looks like your cart is empty</p>
                    
                    <div className='side-links'>
                        <Link to='/'>Start shopping</Link>
                        <Link to='/register' className='whiteBtn'>Sign in</Link>
                        
                    </div>
                  </div>
                </div>
            }
        </div>
    )
}

export default CartPage