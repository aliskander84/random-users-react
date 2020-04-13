import React, {useEffect} from 'react'
import {TState} from '../store/types'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../store/actions'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const {users} = useSelector<TState, TState>(state => state)

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers(5))
      console.log('effect')
    }
  })

  return <>

    Home
  </>
}