'use client'
import { useState } from 'react'
import Child from './Child'
const Parent = () => {
  const [ime, setIme] = useState('');

  return (
    <>
    <Child ime={ime} />
    <div>Parent</div>
    <input type="text"
    value={ime}
    onChange={(e) => setIme(e.target.value)}
    />
   </>

  )
}

export default Parent