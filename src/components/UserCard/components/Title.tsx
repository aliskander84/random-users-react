import React from 'react'
import {Typography} from '@material-ui/core'

interface IProps {
  text: string
}

export const Title: React.FC<IProps> = ({text}) => <>
  <Typography variant={'h6'}>
    {text}
  </Typography>
</>