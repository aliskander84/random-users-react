import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Home} from 'views/Home'
import {User} from 'views/User'

export const RouterView = () => (
  <Switch>
    <Route path={'/'} exact component={Home}/>
    <Route path={'/users/:index'} component={User}/>
    <Redirect to={'/'}/>
  </Switch>
)
