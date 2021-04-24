import React from 'react'

interface InputProps {
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const { type, placeholder, value, onChange } = props

    return (
        <input
            value={value}
            onChange={onChange}
            className='border border-blue-500 rounded-md p-2 font-light my-2'
            type={type}
            placeholder={placeholder}
            required
        />
    );
}
