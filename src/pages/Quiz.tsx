import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';

import { Question } from '../components/Question';
import { appStoreContext } from '../store/AppStore';

export const Quiz = observer(() => {

    const appStore = useContext(appStoreContext)

    return (
        <div className='p-2'>
            <div className='text-center text-4xl text-blue-700 font-bold'>{appStore.quizStore.selectedQuiz.name}</div>
            <div className='flex flex-wrap'>
                {appStore.quizStore.selectedQuiz.questions && appStore.quizStore.selectedQuiz.questions.map(question => (
                    <Question key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
})
