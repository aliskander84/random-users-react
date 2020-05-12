export const GET_USERS = 'GET_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'

export type action = getUsers

export type getUsers = {
  type: string
  users: users
}

export type state = {
  users: users
}

export type users = user[]

export type user = {
  gender: string
  name: name
  location: location
  email: string
  dob: dob
  phone: string
  id: id
  picture: picture
}

type dob = {
  date: string
  age: number
}

type name = {
  title: string
  first: string
  last: string
}

type location = {
  street: street
  city: string
  state: string
  country: string
  postcode: number
  coordinates: coordinates
  timezone: timezone
}

type timezone = {
  offset: string
  description: string
}

type coordinates = {
  latitude: string
  longitude: string
}

type street = {
  number: number
  name: string
}

type id = {
  name: string
  value: string
}

type picture = {
  large: string
  medium: string
  thumbnail: string
}
