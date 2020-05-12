import React from 'react'
// import {NavLink} from 'react-router-dom'
import {AppBar, Toolbar} from '@material-ui/core'
import {Title} from './components/Title'
// import {SupervisorAccount as UsersIcon} from '@material-ui/icons'

export const Header: React.FC = () => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Title text={'Random users'}/>
      </Toolbar>
    </AppBar>
  )
}
