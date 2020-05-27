import React, {useEffect} from 'react'
import {TState} from '../store/types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers} from '../store/actions'
import {UserCard} from '../components/UserCard/UserCard'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Container, Grid} from '@material-ui/core'
import {Loader} from '../components/Loader/Loader'
import {SearchForm} from '../components/SearchForm/SearchForm'

const useStyles = makeStyles({
  container: {
    paddingLeft: 8,
    paddingRight: 8
  },
  userCard: {},
  gridContainer: {
    marginTop: 8
  },
  noResults: {
    margin: '0 auto',
    padding: 16
  }
})

export const Home: React.FC = () => {
  const classes = useStyles()
  const limit = 10
  const dispatch = useDispatch()
  const {users: allUsers} = useSelector<TState, TState>(state => state)
  const {searchedUsers} = useSelector<TState, TState>(state => state)
  const {searchText} = useSelector<TState, TState>(state => state)
  const users = searchText ? searchedUsers : allUsers

  useEffect(() => {
    if (allUsers.length === 0) dispatch(fetchUsers(limit))
  }, [allUsers, dispatch])

  return (<>
    <SearchForm/>
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={1} className={classes.gridContainer}>
        {users.length === 0
          ? (searchText ? <h4 className={classes.noResults}>No results for query :(</h4> : <Loader limit={limit}/>)
          : users.map((user, idx) => (
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
  </>)
}
