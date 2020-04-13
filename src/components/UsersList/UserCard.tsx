import React from 'react'
import {TUser} from '../../store/types'

interface IProps {
  user: TUser
}

export const UserCard: React.FC<IProps> = ({user: {
  name, id
}}) => <>
  {name}: {id}
</>