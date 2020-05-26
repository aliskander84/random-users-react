import React from 'react'
import {TUser} from '../../store/types'
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {},
  title: {
    textAlign: 'center'
  }
})

type props = {
  user: TUser
}

export const UserData: React.FC<props> = ({user}) => {
  const classes = useStyles()
  const {
    name: {title: titleName, first: firstName, last: lastName},
    location: {country, state, postcode, city, street: {number: streetNum, name: streetName}},
    email,
    gender,
    dob: {date: birthDate, age},
    phone
  } = user

  const day = (date: Date): number => {
    return date.getDate()
  }

  const month = (date: Date): string => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return months[date.getMonth()]
  }

  const year = (date: Date): number => {
    return date.getFullYear()
  }

  const date = (date: string): Date => {
    return new Date(date)
  }

  return (
    <TableContainer
      component={Paper}
      elevation={4}
      className={classes.card}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <h3 className={classes.title}>
                {titleName} {firstName} {lastName}
              </h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Address:</TableCell>
            <TableCell>
              <div>{country}</div>
              <div>{state}</div>
              <div>{postcode} {city}</div>
              <div>{streetNum} {streetName}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email:</TableCell>
            <TableCell>{email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Gender:</TableCell>
            <TableCell>{gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date of Birth:</TableCell>
            <TableCell>
              <div>{day(date(birthDate))} {month(date(birthDate))} {year(date(birthDate))}</div>
              <div>{age} years old</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone:</TableCell>
            <TableCell>{phone}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}