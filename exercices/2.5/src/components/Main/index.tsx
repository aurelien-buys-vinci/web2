import { useState } from 'react'

interface ClickCounterProps {
    message1: string;
}

const ClickCounter = ({message1}:ClickCounterProps) => {
    const [count, setCount] = useState(0)
    const [mouseOn, setMouseOn] = useState(false)

    const handleMouse = () => {
        console.log("mouse over")
        setMouseOn(!mouseOn)
    }
    
    
    return (
        <button onClick={() => setCount((count) => count + 1)} onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
            {mouseOn ? "Please click on me now !" : (count >= 10 ? message1+"\n" : "") + "count is "+(count)}            
        </button>
    )
}

export default ClickCounter;