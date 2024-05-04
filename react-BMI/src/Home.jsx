import React, { useState } from 'react'
import './Home.css'
function Home() {

const[height,setHeight]=useState("");
const[weight,setWeight]=useState("");
const[bmi,setBmi]=useState(null);
const[bmiStatus,setBmiStatus]=useState("");
const[error,setError]=useState("")


const calculateBmi=()=>{
    const isValidHeight= /^\d+$/.test(height);
    const isValidWeight= /^\d+$/.test(weight);
    
    if(isValidHeight &&isValidWeight){
        const heightMeters=height/100;
        const bmiValue=weight/(heightMeters*heightMeters);
        setBmi(bmiValue.toFixed(2))
        if(bmiValue<18.5){
            setBmiStatus("underWeight")
        }
        else if(bmiValue >=18.5 && bmiValue <24.9){
            setBmiStatus("Normal Weight")

        } else if(bmiValue >=25 && bmiValue <29.9){
            setBmiStatus("Over Weight")

        }
        else{
            setBmiStatus("Obese")
        }
        setError("");

    }
    else{
        setBmi(null);
        setBmiStatus("")
        setError("Please enter valid numeric values ")
    }
};
function clearALL(){
    setBmi(null);
    setBmiStatus("")
    setHeight("")
    setWeight("")
}




  return (
    <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
            <h1>BMI Calculator</h1>

           {error &&<p className='error'>{error}</p>}



            <div className="input-container">
                <label  htmlFor='height'>Height (cm)</label>
                <input type="text" id='height' value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>
        
            <div className="input-container">
                <label  htmlFor='weight'>Weight (kg)</label>
                <input type="text" id='weight' value={weight}  onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <button className='btn' onClick={calculateBmi}> Calaculate Bmi</button>
            <button className='btn-clear' onClick={clearALL}> Reload</button>
            {bmi!== null &&(
                    <div className="result">
                    <p>your BMI is:{bmi}</p>
                    <p>status: {bmiStatus}</p>
                </div>
    
            )}
            </div>
        

    </div>
  )
}

export default Home