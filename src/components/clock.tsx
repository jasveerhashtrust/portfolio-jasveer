import { useEffect, useState } from 'react'
import Clock from 'react-clock'
import React from 'react'

const ClockWidget = () => {
    const [value, setValue] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <p>Current time:</p>
            <Clock value={value} />
        </div>
    )
}

export default ClockWidget
