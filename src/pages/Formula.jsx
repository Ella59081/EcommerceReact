import {useState} from "react"

const Quadratic = () =>{

    const [formData, setFormData] = useState({
        b: 0,
        a: 0,
        c: 0,
    })

    const[result, setResult] = useState("");

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let a = formData.a;
        let b = formData.b;
        let c = formData.c;
        const ans = Calculation(a, b, c);
        setResult(ans)
        
    }

    function Calculation(b, a, c){
        let D = Math.sqrt((b * b) - 4 * a * c);
        let x1 = Number(Math.floor((-b - D) / 2 * a));
        let x2 = Number(Math.floor((-b + D) / 2 * a));
        

        if(D == 0){
            x1 = -b / (2 * a)
        }else if(D < 0){
            return "Value of D cannot be negative";
        }
        
        return [x1, x2];
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}  style={{display: "flex", flexDirection: "column", width: "500px", gap: "10px", padding: "100px"}}>
                    
                <label htmlFor="a">Enter b</label>
                <input type="number" name="b" onChange ={handleChange}/>
    
                <label htmlFor="a">Enter a</label>
                <input type="number" name="a" onChange ={handleChange}/>
    
                <label htmlFor="a">Enter c</label>
                <input type="number" name="c"onChange ={handleChange}/>
                <button type = "submit">
                    Solve for x
                </button>
                { result && 
                   <div style={{padding: "10px", backgroundColor: "grey"}}>{parseInt(result)}</div>
                }
            </form>
        </div>
    )
}

export default Quadratic
