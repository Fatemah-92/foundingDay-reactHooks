import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function LogoutButton() {   
  const navigate = useNavigate()
  const removeInfo = ()=>{
    localStorage.removeItem('name');
    navigate("/")
  }
  return (
    <div className="logout">
      <button onClick={removeInfo}>تسجيل خروج</button>
    </div> 
  )
}
