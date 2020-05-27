import React from 'react'
import {UserPhoto} from '../components/UserPhoto/UserPhoto'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {TState, TUser} from '../store/types'
import {UserData} from '../components/UserData/UserData'
import {makeStyles} from '@material-ui/core/styles'
import {Grid} from '@material-ui/core'

const useStyles = makeStyles({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  gridContainer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'center'
  }
})

type params = {
  index: string
}

export const User: React.FC = () => {
  const classes = useStyles()
  const {index} = useParams<params>()
  const user = useSelector<TState, TUser>(state => {
    const idx = index as unknown as number
    const isSearch = state.searchedUsers.length !== 0
    if (isSearch) {
      return state.searchedUsers[idx]
    } else {
      return state.users[idx]
    }
  })
  const {
    picture: {large: photo}
  } = user

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={2}
        >
          <UserPhoto src={photo}/>
        </Grid>
      </Grid>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={4}
          xl={2}
        >
          <UserData user={user}/>
        </Grid>
      </Grid>
    </div>
  )
}
