import React, {useEffect} from 'react'
import {TState} from '../store/types'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers, getUsers} from '../store/actions'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  const {users} = useSelector<TState, TState>(state => state)

  useEffect(() => {
    // if (users.length === 0) {
    //   dispatch(getUsers(5))
    //   console.log('effect')
    // } else {
    //   setIsLoading(false)
    // }
    dispatch(fetchUsers(5))
    // console.log(users[0])
    if (users.length !== 0) console.log(users[0].gender)
  }, [users.length, dispatch])

  const Home = <>
    {/*{console.log('home')}*/}
  </>

  return <>
    {users.length === 0 ? 'Loading' : 'Loading'}
  </>
}