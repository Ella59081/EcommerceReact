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
                       <Link to='/products'>ALL CATEGORIES</Link>
                       <Link to='/categories/65adf345a3792eb655ef6b84'>hello</Link>
                       {/* <a href="">MEN</a> */}
                       <Link to='/categories/men'>MEN</Link>
                       <Link to='/categories/women'>WOMEN</Link>
                       
                       
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