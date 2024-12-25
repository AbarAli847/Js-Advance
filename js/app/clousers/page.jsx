// simple hy Closures  nestted function apnay outerfunctions ky saray variables or paramters ko access kr sekhta hy
  //  example with inner or outer function

import React from 'react'

const Clousers = () => {

function Outerfunction(fname){
const lname = "ali";
 const innerfunction = () =>{
          console.log( fname + lname)
};
innerfunction()
}

Outerfunction(" Engineer abrar")

  return (
    <div>Clousers</div>
  )
}

export default Clousers