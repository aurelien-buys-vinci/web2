import './App.css'
import RandomDog from '../RandomDog/index'
import { useState } from 'react'

function App() {
  const [reload, setReload] = useState(false);

  const handleClick = () => {
    setReload(!reload);
  }

  return (
    <div>
      <h1>3 dogs</h1>
      <button onClick={handleClick}>
        click for reload the 3 dogs
      </button>
      <div>
      <RandomDog key={`${reload}1`} />
      <RandomDog key={`${reload}2`} />
      <RandomDog key={`${reload}3`} />
      </div>
    </div>
  )
}

export default App
