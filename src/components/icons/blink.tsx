import React from 'react'

const Blink = () => {
    return (
        <svg>
            <circle fill="#ff0000" stroke="none" cx="10" cy="10" r="12">
                <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                />
            </circle>
        </svg>
    )
}

export default Blink
