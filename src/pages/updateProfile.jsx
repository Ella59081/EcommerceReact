import { useState } from "react"
const UpdateProfile = () =>{
    const[user, setUser] = useState({
        name: "",
        age: 0,
        location: ""
    })

    const ageUpdater = () =>{
        setUser((prevuser) =>({
            ...prevuser,
            age: prevuser.age + 1,
        }))
    }
    return(
        <div>
            <h1>Update Profile</h1>
            <p>Name: {user.name}</p>
            <p>location: {user.location}</p>
            <p>Age: {user.age}</p>
            <button onClick={ageUpdater}>Update Age</button>
        </div>
    )
}

export default UpdateProfile;