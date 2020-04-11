import React from 'react'
import Container from 'react-bootstrap/Container'
import {Header} from './components/Header'
import {RouterView} from './router/RouterView'

export const App = () => {
  return <>
    <Header/>
    <Container fluid>
      <RouterView/>
    </Container>
  </>
}
