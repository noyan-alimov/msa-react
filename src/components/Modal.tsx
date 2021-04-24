import { observer } from "mobx-react-lite";
import React from 'react'

interface ModalProps {
    children: React.ReactNode
    isVisible: boolean
}

export const Modal = observer((props: ModalProps) => {
    const { children, isVisible } = props

    return (
        <div className={`bg-black bg-opacity-20 fixed z-10 left-0 top-0 w-full h-full overflow-auto ${isVisible ? `block` : `hidden`}`}>
            <div className='bg-white rounded my-20 mx-auto p-5 border w-4/5'>
                {children}
            </div>
        </div>
    )
})