import React from "react"
import { Quiz } from "./components/Quiz"
import { data } from "./data"

export const App = () => {
    const quiz = data[0].quizzes![0]

    return <Quiz quiz={quiz} />
}