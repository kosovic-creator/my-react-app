'use client'
import { useState } from 'react'
import Child from './Child'
const Parent = () => {
  const [ime, setIme] = useState('');


  return (
    <>
    <Child ime={ime} sabiranje={(a, b) => a + b} napisiLog={() => console.log('uauau')} />
    <div>Parent</div>
    <input type="text"
    placeholder="Unesi ime u parentu ide u child"
    value={ime}
    onChange={(e) => setIme(e.target.value)}
    />
   </>

  )
}

export default Parent