import React, { useEffect, useState } from 'react'

function QuestionTimer({timeout, onTimeout, mode}) {
    const [timeLeft, setTimeLeft] = useState(timeout)

    useEffect(() => {
        console.log('set interval');
        
        const interval = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                if (prevTimeLeft <= 1) {
                    clearInterval(interval)
                    return 0
                }
                return prevTimeLeft - 100
            })
        }, 100)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        console.log('settimeout');
        
        const timeoutId = setTimeout(onTimeout, timeout)
        return () => clearTimeout(timeoutId)
    }, [timeout, onTimeout])

  return (
    <progress id='question-time' value={timeLeft} max={timeout}  className={mode}/>
  )
}

export default QuestionTimer