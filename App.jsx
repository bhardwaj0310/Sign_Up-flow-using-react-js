import { useState } from 'react'
import './App.css'
import SinghUp from './components/singhUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SinghUp />
    </>
  )
}

export default App
