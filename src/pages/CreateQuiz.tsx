import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { FullScreenCenter } from "../components/FullScreenCenter";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { appStoreContext } from "../store/AppStore";
import { useHistory } from "react-router";

interface CreateQuizProps {

}

export const CreateQuiz = observer((props: CreateQuizProps) => {
    const appStore = useContext(appStoreContext)
    const history = useHistory()

    const [name, setName] = useState<string>('')
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const [errorMessage, setErrorMessage] = useState<string>('')

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await appStore.createQuizApi(name)
        if (!res) return

        if (!res.success && res.errorMessage) {
            setErrorMessage(res.errorMessage)
            return
        }

        if (res.success) {
            history.push('/login')
        }
    }

    return (
        <FullScreenCenter>
            <form onSubmit={onSubmit} className='flex flex-col w-full md:w-80'>
                <div className='mb-6 text-center text-blue-500 font-bold text-2xl'>Create Quiz</div>
                <Input
                    value={name}
                    onChange={changeName}
                    type='text'
                    placeholder='Name'
                />
                <Button text='Create Quiz' />
                {errorMessage && (
                    <div className='mt-2 text-center text-red-500 font-light text-lg'>{errorMessage}</div>
                )}
            </form>
        </FullScreenCenter>
    )
})