import React from 'react'


const hoisting = () => {

// example of veriable hoisting

var name = "Engineer Abrar Ali"
console.log("🚀 ~ hoisting ~ name:", name)


// example of function hoisting

student( );

// regualar fun
function student( ){
    console.log("🚀 ~ student ~ student:", student)
}



  return (
    <div>
<p>Hoisting ka matlab hai ki JavaScript engine apne code ko execute karne
        se pehle sabhi variables aur functions ko uske containing scope ke top
        par le jata hai.</p>
        
        <h1>types of hoisting</h1>
        <h1>veriable hoisting</h1>
        <h1>Function hoisting</h1>

    </div>
  )
}

export default hoisting