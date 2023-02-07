import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Nav() {
  const navigate = useNavigate()
  const InterFace =()=>{
    navigate("/")    
  }
  return (
    <nav>
        <img src={logo} alt="" className='logo' onClick={InterFace}/>
    </nav>
  )
}