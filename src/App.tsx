import React from 'react'
import Container from 'react-bootstrap/Container'
import {useSelector} from 'react-redux'
import {IState} from './store/types'

export const App = () => {
  const {hello} = useSelector<IState, IState>(state => state)

  return (
    <Container fluid>
      {hello}
    </Container>
  )
}
