import React from 'react'
import {Typography} from '@material-ui/core'

interface props {
  text: string
}

export const Title: React.FC<props> = ({text}) => <>
  <Typography variant="h5">
    {text}
  </Typography>
</>