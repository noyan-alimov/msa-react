import { observer } from 'mobx-react-lite';
import React from 'react'
import { Answer as AnswerModel } from '../models';

interface AnswerProps {
    answer: AnswerModel
}

export const Answer = observer((props: AnswerProps) => {
    const { answer } = props

    return (
        <div className='p-4 font-light'>
            <div className='text-xl text-green-500'>{answer.answer}</div>
            <div className='text-xl text-green-800'>{answer.isCorrect ? 'Correct' : 'Incorrect'}</div>
        </div>
    );
})