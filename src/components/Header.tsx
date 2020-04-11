import React from 'react'
import {NavLink} from 'react-router-dom'

export const Header: React.FC = () => {
  return <>
    <NavLink to={'/'}>Home</NavLink> |
    <NavLink to={'/user'}>User</NavLink>
  </>
}