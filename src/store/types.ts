export const GET_USERS = 'FETCH_USERS'

export type TGetUsers = {
  type: string
  payload: {
    users: TUsers
  }
}

export type TState = {
  users: TUsers
}

export type TUsers = TUser[]

export type TUser = {
  gender: string
  name: TName
  location: TLocation
  email: string
  dob: TDOB
  phone: string
  id: TId
  picture: TPicture
}

type TDOB = {
  date: string
  age: number
}

type TName = {
  title: string
  first: string
  last: string
}

type TLocation = {
  street: TStreet
  city: string
  state: string
  country: string
  postcode: number
  coordinates: TCoordinates
  timezone: TTimezone
}

type TTimezone = {
  offset: string
  description: string
}

type TCoordinates = {
  latitude: string
  longitude: string
}

type TStreet = {
  number: number
  name: string
}

type TId = {
  name: string
  value: string
}

type TPicture = {
  large: string
  medium: string
  thumbnail: string
}