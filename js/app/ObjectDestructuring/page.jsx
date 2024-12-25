import React from 'react'

const ObjectDestructuring = () => {

const obj = {
    name: "Abrar Ali",
    girlfriend: "no",
    age : 22,
    address :{
        city: "faisalabad",
        country: "pakistan"
    },
    sleeptime: "10pm",
    practice:"4am"

};

const {
    name: fname,
    girls,
    age,
    address: { city, country },
    // ...shedule
    practice,

  } = obj;
console.log(`${fname}, ${age}, ${city}, ${practice}`)
// console.log(`${...shedule}`)


  return (
    <div>
      <h3>Object Destructuring</h3>
      <h2>
        Object destructuring in JavaScript is a powerful feature that allows you
        to extract properties from objects into variables, providing a concise
        and readable syntax
      </h2>
    </div>
  )
}

export default ObjectDestructuring