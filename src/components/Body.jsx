import React from 'react'
import { useState } from 'react';

import './body.css'
import Input from './Input'
const Body = () => {
    const [inp1,setInt1]=useState('')
    const [inp2,setInt2]=useState('')
    const [inp3,setInt3]=useState('')
    const [inp4,setInt4]=useState('')
    const [inp5,setInt5]=useState('')
    const [inp6,setInt6]=useState('')
    const [inp7,setInt7]=useState('')
    const [inp8,setInt8]=useState('')
    const [inp9,setInt9]=useState('')
    const [inp10,setInt10]=useState('')
  return (
    <div>
        <div id="main">

            <div className="leftContainer">
                <Input input={inp1} setInt={setInt1}/>
                <Input input={inp2} setInt={setInt2}/>
                <Input input={inp3} setInt={setInt3}/>
                <Input input={inp4} setInt={setInt4}/>
                <Input input={inp5} setInt={setInt5}/>
                <Input input={inp6} setInt={setInt6}/> 
                <Input input={inp7} setInt={setInt7}/>
                <Input input={inp8} setInt={setInt8}/>
                <Input input={inp9} setInt={setInt9}/>
                <Input input={inp10} setInt={setInt10}/>
            </div>
      
           
        </div>
    </div>
  )
}

export default Body