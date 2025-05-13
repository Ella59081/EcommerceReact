import '../styles/userDashboard.css'
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

function UserDashboard(){

        const {logout, user} = useAuth();
    
        const handleLogout = () =>{
            logout()
            Navigate('/login')
        }

        const [isUpdating, setIsUpdating]= useState(false)
            const [isUpdated, setIsUpdated]= useState(false)
        
            const editProfile = () =>{
                setIsUpdating(true)
                setIsUpdated(false)
            }
            
            const [formData, setFormData] = useState (
                {
                    name: user.fullName
                }
            )
        
            const handleChange = (e) =>{
                setFormData({...formData, [e.target.name] : e.target.value});
            }
        
            const save = (e) =>{
                e.preventDefault();
                setIsUpdating(false)
                setIsUpdated(true)
        
            localStorage.setItem("newName", JSON.stringify(formData.name))
            }

    return(
        <>
        <div className='grid-container'>
            <div className="grid-layout">
                <div className="userStat long">
                    <h1>Welcome {
                       isUpdated == true ? formData.name : user.fullName
                    }</h1>
                    <p className='username'>Fullname : 
                    {
                            isUpdating == false ? <input style={{outline: "none"}} type='text' readOnly placeholder={user.fullName}/>
                            : <input style={{border: "2px solid black"}} type='text' placeholder={formData.name} name="name" onChange={handleChange}/>
                        }
                    </p>
                    <p>Email Address : {user.email}</p>
                    <p>Role: Customer</p>
                    <div className="buttons">
                       <button onClick={editProfile} className='edit'>
                          <img src="/src/assets/images/pen-solid.svg" alt=""/>
                          Edit Profile 
                       </button>
                       {
                        isUpdating == false ?  ""
                        :  <button onClick={save} className='edit'>
                               <img src="/src/assets/images/bookmark-solid.svg" alt="" />
                               Save changes
                            </button>

                       }
                    </div>
                    <button className="logout">
                        <img src="/src/assets/images/arrow-right-from-bracket-solid.svg" alt="" />
                       Logout
                    </button>
                </div>
                <div className="userStat">
                    <h2>Orders</h2>
                    <p>0</p>
                </div>
                <div className="userStat">
                    <h2>Cart</h2>
                    <p>0</p>
                </div>
                <div className="userStat">
                   <h2>Wishlist</h2>
                   <p>0</p>
                </div>
                <div className="userStat">
                    <h2>Deliveries</h2>
                    <p>0</p>
                </div>
                {/* <div className="userStat"></div> */}
            </div>
        </div>
        </>
    )
}

export default UserDashboard