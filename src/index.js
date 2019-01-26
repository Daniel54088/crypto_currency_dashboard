import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router-3'
import style from "./main.css"

//component
import App from "./App"
import Home from './pages/Home/Home'
import Login from './component/Login'

ReactDOM.render(
    <Router history={browserHistory} >

        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="login" component={Login} />
        </Route>

    </Router>
    , document.querySelector('#app')
)

