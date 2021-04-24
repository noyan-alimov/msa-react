import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Quiz } from "./components/Quiz"
import { data } from "./data"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route exact path='/' component={Quiz} /> */}
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}