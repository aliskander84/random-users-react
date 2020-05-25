import React, {useEffect} from 'react'
import {state} from '../store/types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../store/actions'
import {UserCard} from '../components/UserCard/UserCard'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Container, Grid} from '@material-ui/core'
import {Loader} from '../components/Loader'

const useStyles = makeStyles({
  container: {
    paddingLeft: 8,
    paddingRight: 8
  },
  userCard: {
    // marginTop: 16
  },
  gridContainer: {
    marginTop: 8
  }
})

export const Home: React.FC = () => {
  const classes = useStyles()
  const limit = 10
  const dispatch = useDispatch()
  const {users} = useSelector<state, state>(state => state)

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers(limit))
  }, [users, dispatch])

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={1} className={classes.gridContainer}>
        {users.length === 0 ? <Loader limit={limit}/> : users.map((user, idx) => (
          <Grid
            key={idx}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={4}
          >
            <Box className={classes.userCard}>
              <UserCard user={user} index={idx}/>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
