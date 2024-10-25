import { useState } from 'react'

interface ClickCounterProps {
    message: string;
}

const ClickCounter = ({message}:ClickCounterProps) => {
    const [count, setCount] = useState(0)
    
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            {count >= 10 ? message : ""}
            count is {count}
        </button>
    )
}

export default ClickCounter;