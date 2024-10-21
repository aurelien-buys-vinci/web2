import User from '../User/index'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <h1>Les utilisateurs</h1>
        <User name="Alice" age={25} isOnline={true} />
        <User name="Bob" age={30} isOnline={false} />
        <User name="Charlie" age={35} isOnline={true} />
      </div>
    </>
  )
}

export default App
