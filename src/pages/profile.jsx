import '../styles/profile.css'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
function ProfilePage(){

    const {user} = useAuth();


    const [isUpdating, setIsUpdating]= useState(false)
    const [isUpdated, setIsUpdated]= useState(false)

    const editProfile = () =>{
        setIsUpdating(true)
        setIsUpdated(false)
    }
    // const save = () =>{
        
    // }
    
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
        <div className='whole'>
            <div className="details">
                <h2>Welcome {
                       isUpdated == true ? formData.name : user.fullName
                    }</h2>
                <div className="form">
                    <div className="label">
                        <label htmlFor="name">User Name</label>
                        {
                            isUpdating == false ? <input type='text' readOnly placeholder={user.fullName}/>
                            : <input type='text' placeholder={formData.name} name="name" onChange={handleChange}/>
                        }
                        {/* {isUpdated == false ? "" 
                            : ''} */}
                    </div>
                    <div className="label">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" readOnly placeholder={user.email}/>
                    </div>
                    <div className="label">
                        <label htmlFor="email">Password</label>
                        <input type="text" readOnly placeholder='*******'/>
                    </div>
                    <div className="buttons">
                       <button onClick={editProfile} className='edit'>Edit Profile</button>
                       {
                        isUpdating == false ?  ""
                        :  <button onClick={save} className='edit'>Save changes</button>

                       }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage