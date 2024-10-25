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
        <button onClick={() => setCount((count) => count + 1)} onMouse={handleMouse}>
            {count >= 10 ? message1 : ""}
            count is {count}
        </button>
    )
}

export default ClickCounter;