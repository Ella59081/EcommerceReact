import '../styles/nav.css'
import { Link } from 'react-router-dom'
function NavBar(){
    return (
        <>
        <div className="nav-container">
            <nav>
                <div className='first-nav'>
                   <Link to="/" className="logo" href="">SHOPIFY</Link>
                   <div className="categories">
                       <a href="">ALL CATEGORIES</a>
                       <a href="">MEN</a>
                       <a href="">WOMEN</a>
                       <a href="">SWIMMERS</a>
                   </div>
                </div>
                <div className="second">
                   <Link to="/register" href=""><span>Signup / Login</span></Link>
                   <Link to="/login" className='sign-in' href="">
                       <img src="/src/assets/images/account.svg" alt="" />
                       <span>Sign in</span>
                   </Link>
                   <a href="" className='cart'>
                       <img src="/src/assets/images/cart.svg" alt="" />
                       <span>My cart</span>
                       <div className="count">0</div>
                   </a>
                </div>

            </nav>
        </div>
        </>
    )
}

export default NavBar