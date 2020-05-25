import React from 'react'
import {IconButton} from '@material-ui/core'
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons'

type props = {
  click: () => void
}

export const BackBtn: React.FC<props> = ({click}) => (
  <IconButton
    color={'inherit'}
    onClick={click}
  >
    <ArrowBackIcon/>
  </IconButton>
)
