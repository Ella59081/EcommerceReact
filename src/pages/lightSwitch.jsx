import {useState} from "react"

const LightSwitch = () =>{
    
    // const [isOff, setIsOff] = useState(true);
    // function handleSwitch(){
    //     setIsOff();
    // }
    //     return(
    //         <div>
    //             <h2>{isOff? "Off" : "On"}</h2>
                
    //             <button onClick={handleSwitch}>{isOff ? "turn it on" : "turn it off" }</button>
    //             <button onClick={handleSwitch}>{!isOff ? "turn it on" : "turn it off"}</button>
    //         </div>
    //     )
    
    const[isOff, setIsOff] = useState(true);
    function handleOff(){
        setIsOff((isOff)== false)
    }
    function handleOn(){
        setIsOff((isOff)== false)
    }
    return(
        <div>
            <h2>{isOff? "Off" : "On"}</h2>
                    
            <button onClick={handleOff}>{isOff? "turn it on" : "turn it off" }</button>
            {/* <button onClick={handleOn}>{!isOff ? "turn it off" : "turn it on"}</button> */}
        </div>
    )
}

export default LightSwitch;