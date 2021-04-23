import React from 'react'
import { Question as QuestionModel } from '../models';
import { Answer } from "./Answer";
import { EditIcon } from './icons/EditIcon';
import { TrashIcon } from './icons/TrashIcon';

interface QuestionProps {
    question: QuestionModel
}

export const Question = (props: QuestionProps) => {
    const { question } = props

    return (
        <div className='p-6 flex w-full md:w-1/2 lg:w-1/3 flex-col justify-center items-center'>
            <div className='p-6 w-3/4 bg-blue-50 rounded-xl shadow-xl'>
                <div className='h-32 text-center text-2xl text-blue-500 font-light'>{question.question}</div>
                <div>
                    {question.answers.map(answer => (
                        <Answer key={answer.id} answer={answer} />
                    ))}
                </div>
                <div className='flex justify-between px-10 mt-4'>
                    <div>
                        <EditIcon />
                    </div>
                    <div>
                        <TrashIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
