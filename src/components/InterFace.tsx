import React from 'react'
import { useNavigate } from "react-router-dom";
import saudi_founding from '../assets/s_f2.png';

export default function InterFace() {

  const navigate = useNavigate()
  const LogIn =()=>{
      navigate("/logIn")    
  }
  const SingUp =()=>{
    navigate("/SingUp")    
  }

  return (
    <div className='mainInterFace'>

      <div className='leftInterFace'>
        <img src={saudi_founding} />
      </div>

      <div className='rightInterFace'>
        <p>مَالحدٍ مِنة، اللَّه اللَي عزْنَا</p>
        <div className='btn'>
          <button onClick={LogIn}>تسجيل دخول</button>
          <button onClick={SingUp}> تسجيل جديد</button>
        </div>
      </div>

    </div>
  )
}