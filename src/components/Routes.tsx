import React from 'react'
 import InterFace from './InterFace'
 import LogIn from './LogIn'
 import SingUp from './SingUp'
 import HomePage from './HomePage'
import { Routes as Routess, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <div>
      <Routess>
        <Route path="/" element={<InterFace/>}></Route>
        <Route path="/logIn" element={<LogIn/>}></Route>
        <Route path="/SingUp" element={<SingUp/>}></Route>
        <Route path="/saudiday" element={<HomePage/>}></Route>
      </Routess>
    </div>
  )
}