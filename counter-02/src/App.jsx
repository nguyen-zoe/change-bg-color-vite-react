import { useState } from 'react'


function App() {
  const[counter, setCounter] =useState(0);

//   let counter=10;
const addValue =()=>{
 setCounter(counter + 1);
}
//in case of multiple/batching value
const addMultiple =() =>{
  setCounter((prevCouter)=> prevCouter+1 );
  setCounter((prevCouter)=> prevCouter+1 );
  setCounter((prevCouter)=> prevCouter+1 );
  setCounter((prevCouter)=> prevCouter+1 );
}

const removeValue =() =>{
  setCounter(counter-1);
}
  return (
    <>
     <h1>React Journey</h1>
     <h2>Counter value starts :{counter} </h2>
     <button onClick={addValue}> Add value</button>
     <button onClick={removeValue}>Remove value</button>
     <button onClick={addMultiple}>Add multiple values</button>
     <section>Footer {counter}</section>
    </>
  )
}

export default App
