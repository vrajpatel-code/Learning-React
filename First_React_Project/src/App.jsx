import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLenght] = useState(6)
  const [numa, setNuma] = useState(false)
  const [specilaa, setSpecilaa] = useState(false)
  const [password, setPassword] = useState("")
  const pref = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numa) str += "0123456789"
    if(specilaa) str += "@#$?"
    for(let i=0;i<length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numa,specilaa])

  const copypass = useCallback(()=> {
    pref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numa,specilaa,passwordGenerator])
  return (
    <>
      <div className="w-full  mx-auto item-center
      shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-3xl text-center px-5 py-3'>Password Generator</h1>
         <div className="flex shadow rounded-lg overflow-hidden md-4 ">
          <input type="text"  value={password} 
          className='outline-none w-full py-1 px-3 bg-white text-xl'
          placeholder='Password' 
          readOnly ref={pref}/>
          <button
          onClick={copypass}
          id="copy"
          className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0'
          >copy</button>
         </div>

         <div className="flex text-sm gap-x-2 px-3 py-4">
              <input type="range" 
              min={6}
              max={32} 
              value={length}
              onChange={(e)=>{setLenght(e.target.value)}}
              className='cursor-pointer'
              />
              <label htmlFor="" className='text-orange-400 text-lg'
              >Length : {length}</label>

              <input type="checkbox" 
              value={numa}
              onClick={() => {
                setNuma((prev) => !prev);}}
              className=''/>
              <label htmlFor="" className='text-orange-400 text-lg'
              >Number</label>

              <input type="checkbox" 
              value={specilaa}
              onClick={() => {
                setSpecilaa((prev) => !prev);
              }}
              className=''/>
              <label htmlFor="" className='text-orange-400 text-lg'
              >Special Character</label>
          </div>
      </div>
    </>
  )
}

export default App
