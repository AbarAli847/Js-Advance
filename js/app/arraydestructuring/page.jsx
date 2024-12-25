import React from 'react'

const page = () => {
    var array = ["zeeshan", "usama","saqib",
        [1,2,3]," shafan","rayyan","umair"
    ]

    const [
      student1,
      student2,
      student3,
      [num1,num2,num3],
      ...classfellows  
    ] =array;
    
console.log(student1,student2,student3)
console.log(num1)
console.log(classfellows)


  return (
    <div>
<h1>Array Destruturing</h1>
<p>array ki hr values ko effient way mein rakh sekhty hein</p>

    </div>
  )
}

export default page