import React, {useEffect} from 'react'
import {TState} from '../store/types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers, getUsers} from '../store/actions'
import {UserCard} from '../components/UserCard/UserCard'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  userCard: {
    marginTop: 20
  }
})

export const Home: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {users} = useSelector<TState, TState>(state => state)

  useEffect(() => {
    if (users.length === 0) dispatch(fetchUsers(5))
  }, [users, dispatch])

  return <>
    {users.length === 0 ? 'Loading' :
      <div className={classes.userCard}>
        <UserCard user={users[0]}/>
      </div>}
  </>
}