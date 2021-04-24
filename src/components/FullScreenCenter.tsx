import React from "react"

interface FullScreenCenterProps {
    children: React.ReactNode
}

export const FullScreenCenter = (props: FullScreenCenterProps) => {
    const { children } = props

    return (
        <div className='h-screen flex justify-center items-center p-10'>
            {children}
        </div>
    )
}