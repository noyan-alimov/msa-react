import React from 'react'
import { Quiz as QuizModel } from '../models';
import { Question } from './Question';

interface QuizProps {
    quiz: QuizModel
}

export const Quiz = (props: QuizProps) => {
    const { quiz } = props

    return (
        <div className='p-2'>
            <div className='text-center text-4xl text-blue-700 font-bold'>{quiz.name}</div>
            <div className='flex flex-wrap'>
                {quiz.questions.map(question => (
                    <Question key={question.id} question={question} />
                ))}
            </div>
        </div>
    );
}
