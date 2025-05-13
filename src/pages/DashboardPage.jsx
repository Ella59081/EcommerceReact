import '../styles/dashboard.css'
import { LoaderIcon } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
function DashboardPage(){


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
                <button onClick={handleLogout}>Log out</button>
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
                          <span>{user ? user.fullName : "User"}</span>
                          <span>My profile</span>
                        </Link>
                    </div>
                </div>
                <div className="layout">
                    <div className="stats-card">
                        <h2>Total Revenue</h2>
                        <p>$93,000.67</p>
                    </div>
                    <div className="stats-card">
                        <h2>Total users</h2>
                        <p>200</p>
                    </div>
                    <div className="stats-card">
                        <h2>Total profit</h2>
                        <p>$23,000</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default DashboardPage