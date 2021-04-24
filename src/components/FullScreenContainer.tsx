import React from "react"

interface FullScreenContainerProps {
    children: React.ReactNode
}

export const FullScreenContainer = (props: FullScreenContainerProps) => {
    const { children } = props

    return (
        <div className='h-screen flex justify-center items-center p-10'>
            {children}
        </div>
    )
}