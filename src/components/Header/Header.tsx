import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import {Title} from './components/Title'
import {BackBtn} from './components/BackBtn'
import {useLocation} from 'react-router'
import {useHistory} from 'react-router-dom'
import {People as PeopleIcon} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconWrap: {
    padding: 12
  }
})

export const Header: React.FC = () => {
  const classes = useStyles()
  const path = useLocation().pathname
  const history = useHistory()

  const backBtnHandler = () => {
    history.push('/')
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        {!path.includes('users')
          ? <span className={classes.iconWrap}><PeopleIcon/></span>
          : null}
        {path.includes('users') ? <BackBtn click={backBtnHandler}/> : null}
        <Title text={'Random users'}/>
      </Toolbar>
    </AppBar>
  )
}
