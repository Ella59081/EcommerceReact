// import '../styles/userDashboard.css'
// import { useAuth } from '../contexts/AuthContext';
// import { useState } from 'react';

// function UserDashboard(){

//         const {logout, user} = useAuth();
    
//         const handleLogout = () =>{
//             logout()
//             Navigate('/login')
//         }

//         const [isUpdating, setIsUpdating]= useState(false)
//             const [isUpdated, setIsUpdated]= useState(false)
        
//             const editProfile = () =>{
//                 setIsUpdating(true)
//                 setIsUpdated(false)
//             }
            
//             const [formData, setFormData] = useState (
//                 {
//                     name: user.fullName
//                 }
//             )
        
//             const handleChange = (e) =>{
//                 setFormData({...formData, [e.target.name] : e.target.value});
//             }
        
//             const save = (e) =>{
//                 e.preventDefault();
//                 setIsUpdating(false)
//                 setIsUpdated(true)
        
//             localStorage.setItem("newName", JSON.stringify(formData.name))
//             }

//     return(
//         <>
//         <div className='grid-container'>
//             <div className="grid-layout">
//                 <div className="userStat long">
//                     <h1>Welcome {
//                        isUpdated == true ? formData.name : user.fullName
//                     }</h1>
//                     <p className='username'>Fullname : 
//                     {
//                             isUpdating == false ? <input style={{outline: "none"}} type='text' readOnly placeholder={user.fullName}/>
//                             : <input style={{border: "2px solid black"}} type='text' placeholder={formData.name} name="name" onChange={handleChange}/>
//                         }
//                     </p>
//                     <p>Email Address : {user.email}</p>
//                     <p>Role: Customer</p>
//                     <div className="buttons">
//                        <button onClick={editProfile} className='edit'>
//                           <img src="/src/assets/images/pen-solid.svg" alt=""/>
//                           Edit Profile 
//                        </button>
//                        {
//                         isUpdating == false ?  ""
//                         :  <button onClick={save} className='edit'>
//                                <img src="/src/assets/images/bookmark-solid.svg" alt="" />
//                                Save changes
//                             </button>

//                        }
//                     </div>
//                     <button className="logout">
//                         <img src="/src/assets/images/arrow-right-from-bracket-solid.svg" alt="" />
//                        Logout
//                     </button>
//                 </div>
//                 <div className="userStat">
//                     <h2>Orders</h2>
//                     <p>0</p>
//                 </div>
//                 <div className="userStat">
//                     <h2>Cart</h2>
//                     <p>0</p>
//                 </div>
//                 <div className="userStat">
//                    <h2>Wishlist</h2>
//                    <p>0</p>
//                 </div>
//                 <div className="userStat">
//                     <h2>Deliveries</h2>
//                     <p>0</p>
//                 </div>
//                 {/* <div className="userStat"></div> */}
//             </div>
//         </div>
//         </>
//     )
// }

// export default UserDashboard
//former dashboard



import '../../styles/userDashboard.css'
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Outlet } from 'react-router-dom';
function UserDashboard(){
        const {logout, user} = useAuth();
        const{cart, cartNumber, total} = useCart()
    
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
                        
                        <Link to='/userdashboard/userCart'>
                            <div>
                                <img src="/src/assets/images/cart-shopping-solid.svg" alt="" />
                                <span>Cart</span>
                            </div>
                        </Link>
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
                        <div className="layout2">
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Orders</h4>
                                   <div className="image1">
                                    <img src="/src/assets/images/orders.png" alt="" />

                                   </div>
                                </div>
                                <p>{cartNumber}</p>
                            </div>
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Cart</h4>
                                   <img src="/src/assets/images/cart.svg" alt="" />
                                </div>
                                <p>{cartNumber}</p>
                            </div>
                            <div className="stats-card">
                                <div className="tit-head">
                                   <h4>Total Savings</h4>
                                   <img src="/src/assets/images/wallet.png" alt="" />
                                </div>
                                <p>$1,000</p>
                            </div>
                            <div className="stats-card">
                            <div className="tit-head">
                                   <h4>Total Spent</h4>
                                   
                                    <img src="/src/assets/images/profit.png" alt="" />
                                   
                                </div>
                                <p>{total}</p>
                            </div>

                            
                        </div>
                        <Outlet/>
                    </div>
                    
            </div>
        </>
    )
}

export default UserDashboard 