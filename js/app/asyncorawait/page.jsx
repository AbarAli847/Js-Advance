

// await Keyword:
// await keyword async function ke andar use hota hai.
// jo ek promise ko wait karta hai jab tak wo resolve ya reject nahi ho jata.
// async or await with array method example:
'use client'
import React, { useEffect, useState } from 'react'

const Asyncorawait = () => {
    
        const[dataFetching,setFetchingdata] = useState()
        console.log(dataFetching)

        useEffect(()=>{
            const Fetchdata = async ()=>{
                 try{
                    const res = await fetch ("https://fakestoreapi.com/products");
                    const data = await res.json();
                    setFetchingdata(data)

                 }catch(error){
                    console.log(error)
                           
                 }
            }
            Fetchdata()
        },[])
    

  return (
    <div>page</div>
  )
}
export default Asyncorawait