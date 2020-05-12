import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {User} from 'views/User'
import {Home} from 'views/Home'

export const RouterView = () => (
  <Switch>
    <Route path={'/user'} component={User}/>
    <Route path={'/'} exact component={Home}/>
    <Redirect to={'/'}/>
  </Switch>
)
