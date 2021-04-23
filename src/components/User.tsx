import React from 'react'
import { User as UserModel } from '../models';
import { Quiz } from './Quiz';

interface UserProps {
    user: UserModel
}

export const User = (props: UserProps) => {
    const { user } = props

    return (
        <div>
            <div>{user.name}</div>
            {user.quizzes.map(quiz => (
                <Quiz key={quiz.id} quiz={quiz} />
            ))}
        </div>
    );
}
