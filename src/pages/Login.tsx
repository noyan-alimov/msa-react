import React, { useContext, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { observer } from 'mobx-react-lite';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { appStoreContext } from '../store/AppStore';
import { FullScreenContainer } from '../components/FullScreenContainer';

export const Login = observer(() => {
    const appStore = useContext(appStoreContext)
    const history = useHistory()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const [errorMessage, setErrorMessage] = useState<string>('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await appStore.signInUser(email, password)
        if (res.success) {
            history.push('/')
            return
        }

        if (!res.success && res.errorMessage) {
            setErrorMessage(res.errorMessage)
        }
    }

    return (
        <FullScreenContainer>
            <form onSubmit={onSubmit} className='flex flex-col w-full md:w-80'>
                <div className='mb-6 text-center text-blue-500 font-bold text-2xl'>Sign In</div>
                <Input value={email} onChange={changeEmail} type='email' placeholder='Email' />
                <Input value={password} onChange={changePassword} type='password' placeholder='Password' />
                <Link to='/register' className='my-2 hover:text-blue-500'>Don't have an account? Sign Up now</Link>
                <Button text='Sign In' />
                {errorMessage && (
                    <div className='mt-2 text-center text-red-500 font-light text-lg'>{errorMessage}</div>
                )}
            </form>
        </FullScreenContainer>
    );
})