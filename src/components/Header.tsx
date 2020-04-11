import React from 'react'
// import {NavLink} from 'react-router-dom'
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core'
// import {SupervisorAccount as UsersIcon} from '@material-ui/icons'

export const Header: React.FC = () => {
  const Title = <>
    <Typography variant="h5">
      Random users
    </Typography>
  </>

  return <>
    <AppBar position="static">
      <Toolbar>
        {Title}
      </Toolbar>
    </AppBar>
  </>
}