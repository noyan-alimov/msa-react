import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Quiz } from '../components/Quiz';
import { appStoreContext } from '../store/AppStore';

export const Quizzes = observer(() => {
    const appStore = useContext(appStoreContext)

    useEffect(() => {
        appStore.fetchQuizzes()
    }, [])

    return <div>
        <div>Quizzes</div>
        {appStore.quizzes.map(quiz => (
            <Quiz key={quiz.id} quiz={quiz} />
        ))}
    </div>
})
