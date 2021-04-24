import React from "react"

interface ButtonProps {
    text: string
}

export const Button = (props: ButtonProps) => {
    const { text } = props

    return (
        <button className='p-2 mt-4 bg-blue-500 rounded-md inline-block text-blue-50 hover:bg-blue-700' type='submit'>{text}</button>
    )
}