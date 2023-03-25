import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/card/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card name='Raianna' age='28' country='Porto Alegre'></Card>
      <Card name='José' age='22' country='Içara'></Card>
      <Card name='Maria' age='32' country='Içara'></Card>
    </div>
  )
}

export default App
