import { Controller } from "react-hook-form";
import '../styles/input.css'
// import "../components/styles/InputField.css"; 
import { useState } from "react";


const InputField = ({ name, label, type = "text", error, control, value }) => {



    // const handleChange = (e) =>{
    //   setFormData({...formData, [e.target.name] : e.target.value});
    // }
  return (
    <div className="container">
      <label className="input-field-label">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input 
            {...field}
            type={type}
            className="input-field-input"
            value={value}
            // onChange={handleChange}
          />
          
        )}

       />
      {error && <p style={{color: "red"}} className="input-field-error">{error}</p>}
    </div>
  );

};

export default InputField;