import { observer } from "mobx-react-lite"
import React, { useContext } from 'react'
import { Link, useHistory } from "react-router-dom"
import { appStoreContext } from '../store/AppStore'

export const Header = observer(() => {
    const appStore = useContext(appStoreContext)
    const history = useHistory()

    const signOut = () => {
        appStore.userStore.signOutUser()
        appStore.setUserId(undefined)
        history.push('/login')
    }

    return (
        <div className='w-full p-4 flex justify-end bg-blue-100'>
            <Link to='/' className='mr-10 text-blue-600 hover:text-blue-800'>Quizzes</Link>
            <button onClick={signOut} className=' text-blue-600 hover:text-blue-800'>Sign Out</button>
        </div>
    )
})
