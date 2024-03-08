import React from 'react'

const Input = ({
    onChange,
    placeholder,
    type,
    onKeyUp,
    onBlur,
}: {
    onChange?: () => void
    placeholder?: string
    type?: string
    onKeyUp?: () => void
    onBlur?: () => void
}) => {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            onKeyUp={onKeyUp}
            onBlur={onBlur}
            className="appearance-none w-full border-0.5  h-auto outline-none  border-borderGreyLight bg-inputBoxColor px-[14px] py-[8px] rounded-[20px] text-[11.5px]  font-normal  text-white focus:shadow-outline"
        />
    )
}

export default Input
