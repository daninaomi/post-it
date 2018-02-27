import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../home'
import Login from '../login'

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </React.Fragment>

)

export default App;