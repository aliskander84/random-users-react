import React from 'react'
import {Typography} from '@material-ui/core'

interface IProps {
  text?: string
}

export const Id: React.FC<IProps> = ({text}) => <>
  <Typography variant={'subtitle1'}>
    ID: {text ? text : '---'}
  </Typography>
</>