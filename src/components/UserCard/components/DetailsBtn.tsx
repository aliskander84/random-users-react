import React from 'react'
import {Button} from '@material-ui/core'
import {Link, Router} from 'react-router-dom'

type props = {
  index: number
}

export const DetailsBtn: React.FC<props> = ({index}) => (
  <Link to={`users/${index}`}>
    <Button>Details></Button>
  </Link>
)
