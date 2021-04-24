import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { EditIcon } from '../components/icons/EditIcon';
import { TrashIcon } from '../components/icons/TrashIcon';
import { Modal } from '../components/Modal';
import { appStoreContext } from '../store/AppStore';

export const Quizzes = observer(() => {
    const appStore = useContext(appStoreContext)
    const history = useHistory()

    const redirectToQuiz = (quizId: string) => {
        appStore.quizStore.setSelectedQuiz(quizId)
        history.push('/quiz')
    }

    useEffect(() => {
        if (!appStore.userId) {
            history.push('/login')
            return
        }

        appStore.quizStore.fetchQuizzes(appStore.userId)
    }, [appStore.userId])

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const showModal = () => {
        setIsModalVisible(true)
    }

    const closeModal = () => {
        setIsModalVisible(false)
    }

    const deleteQuiz = async (quizId: string) => {
        await appStore.quizStore.deleteQuizApi(appStore.userId, quizId)
        await appStore.quizStore.fetchQuizzes(appStore.userId)
        closeModal()
    }

    return <div>
        <div className='text-center text-4xl text-blue-700 font-bold my-4'>Quizzes</div>
        <table className='w-screen lg:w-half-screen lg:mx-auto'>
            <thead>
                <tr>
                    <th className='border text-green-600 text-xl py-2'>Name</th>
                    <th className='border w-20'></th>
                    <th className='border w-20'></th>
                </tr>
            </thead>
            <tbody>
                {appStore.quizStore.quizzes.map(quiz => (
                    <tr key={quiz.id}>
                        <td className='border text-center text-green-500 text-lg py-4'>{quiz.name}</td>
                        <td className='border'>
                            <div className='flex justify-center items-center'>
                                <div onClick={() => {
                                    redirectToQuiz(quiz.id)
                                }}>
                                    <EditIcon />
                                </div>
                            </div>
                        </td>
                        <td className='border'>
                            <div className='flex justify-center items-center'>
                                <div onClick={showModal}>
                                    <TrashIcon />
                                </div>
                                <Modal
                                    isVisible={isModalVisible}
                                >
                                    <div className='text-center font-light text-lg'>Are you sure you want to delete the Quiz?</div>
                                    <div className='flex justify-center items-center mt-4'>
                                        <button onClick={() => {
                                            deleteQuiz(quiz.id)
                                        }} className='mx-2 p-2 bg-red-500 rounded-md inline-block text-blue-50 hover:bg-red-700'>YES</button>
                                        <button onClick={closeModal} className='mx-2 p-2 bg-gray-500 rounded-md inline-block text-blue-50 hover:bg-gray-700'>NO</button>
                                    </div>
                                </Modal>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
})
