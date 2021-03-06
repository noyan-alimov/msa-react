import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Quiz } from "./pages/Quiz"
import { auth } from "./firebase/config"
import { CreateQuiz } from "./pages/CreateQuiz"
import { Login } from "./pages/Login"
import { Quizzes } from "./pages/Quizzes"
import { Register } from "./pages/Register"
import { appStoreContext } from "./store/AppStore"
import { Header } from './components/Header'

export const App = observer(() => {
    const appStore = useContext(appStoreContext)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                appStore.setUserId(user.uid)
                console.log('signed in')
            } else {
                console.log('Signed out')
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <BrowserRouter>
            {appStore.userId && (
                <Header />
            )}
            <Switch>
                <Route exact path='/' component={Quizzes} />
                <Route exact path='/quiz' component={Quiz} />
                <Route exact path='/createQuiz' component={CreateQuiz} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
})