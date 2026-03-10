import React, { useCallback, useRef, useState } from 'react'

const App = () => {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)

  const passRef = useRef(null)


  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numAllowed) {
        str += "0123456789"
      }
      if (CharAllowed) {
        str += "!@#$%^&*()_{}~"
      }

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numAllowed, CharAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passRef.current?.select()
    
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 bg-gray-700'>
        <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-3 px-4 bg-white'
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button
            onClick={copyPasswordToClipBoard}
            className='bg-orange-500 outline-none text-white px-3 py-0.5 shrink'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-orange-400'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className='text-orange-400'>Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={CharAllowed}
              id='numInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput" className='text-orange-400'>Character</label>

          </div>
          <button className='px-2 py-3 bg-amber-600 rounded-lg'
            onClick={() => {
              passwordGenerator()
            }}
          >
            generate password
          </button>
        </div>
      </div>
    </div>
  )
}

export default App