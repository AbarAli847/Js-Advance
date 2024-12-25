"use client"
import React from 'react'

const Scope = () => {
    // local Scope
    let name = "ali"
    const Student = ()=>{
        console.log("i wanna check ",name)
    }

    console.log(name,"hdjhbcjdh")
    Student()
  return (
    <div>Scope</div>
  )
}

export default Scope