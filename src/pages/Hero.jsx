import { useState } from "react";
const Hero = () =>{
    const [formData, setFormData] = useState({
        width: 90,
        length: "",
        height: "",
    })

    const[errors, setErrors] = useState({
        width= "",
        length = "",
        height= ""

    })
    const[result, setResult] = useState("");

    function heroCalc(length, width, height){
        let s = (Number(length)) + (Number(width) + Number(height)) / 2;
        let area = Math.sqrt(
            s * (s-Number(length)) * (s-Number(width)) * (s-Number(height))
        );
        return area;
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors({...errors, "height cannot be less than both length and width"})

        let length = Number(formData.length);
        let width = Number(formData.width);
        let height = Number(formData.height)

        const area = heroCalc(
            Number(formData.length),
            Number(formData.width),
            Number(formData.height)
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                
                <label htmlFor="a">Enter length(A)</label>
                <input type="number" name="length" onChange={handleChange}/>
                button(solve area of triangle)
            </form>
        </div>
    )
}