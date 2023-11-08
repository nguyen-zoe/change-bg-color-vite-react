import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [size, setSize] = useState(10);
  const[numAllowed, setNumAllowed] = useState(false);
  const[charAllowed, setCharAllowed]= useState(false);
  const [password, setPassword] = useState('');

  const passwordRef= useRef(null);
  const generatePassword = useCallback(() =>{
    let pwd ='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz';
    if(numAllowed) str +='0123456789';
    if(charAllowed) str += '!@#$%^&*()_+';
    
    for(let i=1; i<size; i++){
     const char = Math.floor(Math.random()* str.length + 1);
     pwd += str.charAt(char);
    }

    setPassword(pwd);//now change state to have new password
  }, [size, numAllowed, charAllowed])

  //as soon as anything changes
  useEffect(() =>{
    generatePassword(); //execute the function
  }, [size, numAllowed, charAllowed])

  const copyPasswordToClipboard =() =>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-900'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button 
         onClick={copyPasswordToClipboard}
         className="text-white px-3 py-0.5 shrink-0 outline-none bg-blue-700">
             Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={6}
            max={100}
            value={size}
            className='cursor-pointer'
            onChange={(e) => setSize(e.target.value)}
            name=''
            id='length'
          />
          <label htmlFor="length">Length: {size}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            name=""
            id="number"
          />

          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            id='charInput'
          />
          <label htmlFor="charInput">Charaters</label>
        </div>
      </div>   
    </div>
  )
}

export default App
