import '../../styles/adminDashboard.css'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

function AdminDashboard(){
        const {logout, user} = useAuth();
    
        const handleLogout = () =>{
            logout()
            Navigate('/login')
        }

    return(
        <>
            <div class="whole">
                    <div className="side">
                        <div className='logo' href="">
                            SHOPIFY
                        </div>
                        <a href="">
                            <div>
                                <img src="/src/assets/images/chart-simple-solid.svg" alt="" />
                                <span>Overview</span>
                            </div>
                        </a>
                        <a href="">
                            <div>
                                <img src="/src/assets/images/tag-solid.svg" alt="" />
                                <span>Products</span>
                            </div>
                        </a>
                        <a href="">
                            <div>
                                <img src="/src/assets/images/cart-shopping-solid.svg" alt="" />
                                <span>Cart</span>
                            </div>
                        </a>
                        <a href="">
                            <div>
                                <img src="/src/assets/images/bag-shopping-solid.svg" alt="" />
                                <span>Orders</span>
                            </div>
                            <img src="" alt="" />
                        </a>
                        <a href="">
                            <div>
                                <img src="/src/assets/images/credit-card-solid (1).svg" alt="" />
                                <span>Checkout</span>
                            </div>
                            <img src="" alt="" />
                        </a>
                        <button onClick={handleLogout}>
                            <img src="/src/assets/images/arrow-right-from-bracket-solid.svg" alt="" />
                            Log out
                        </button>
                    </div>
                    <div className="stats">
                        <div className="title">
                            <h2>Welcome {user ? user.fullName : "User"}</h2>
                            <div className="back">
                                <div className="search">
                                    <a href=""><img src="/src/assets/images/magnifying-glass-solid.svg" alt="" /></a>
                                    <input type="text" placeholder='Search here...'/>
                                </div>
                                <Link to="/profile">
                                  <span>My profile</span>
                                  <span>{ user ? user.fullName : "User"}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="layout">
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Sales</h4>
                                   <div className="image1">
                                      <img src="/src/assets/images/wallet.png" alt="" />

                                   </div>
                                </div>
                                <p>$93,000.67</p>
                            </div>
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Users</h4>
                                   <img src="/src/assets/images/users.png" alt="" />
                                </div>
                                <p>200</p>
                            </div>
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Orders</h4>
                                   <img src="/src/assets/images/orders.png" alt="" />
                                </div>
                                <p>1,000</p>
                            </div>
                            <div className="stats-card">
                            <div className="tit-head">
                                   <h4>Total Profit</h4>
                                   <div className="des">
                                      <img src="/src/assets/images/profit.png" alt="" />
                                   </div>
                                </div>
                                <p>$23,000</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AdminDashboard 