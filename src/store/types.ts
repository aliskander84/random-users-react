export const GET_USERS = 'GET_USERS'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
export const SEARCH = 'SEARCH'
export const CANCEL_SEARCH = 'CANCEL_SEARCH'

export type TAction = TGetUsers | TFetchUsersSuccess | TSetSearchText | TSearch | TCancelSearch

type TGetUsers = {
  type: typeof GET_USERS
  users: TUsers
}

type TFetchUsersSuccess = {
  type: typeof FETCH_USERS_SUCCESS
  users: TUsers
}

type TSetSearchText = {
  type: typeof SET_SEARCH_TEXT
  searchText: string
}

type TSearch = {
  type: typeof SEARCH
}

type TCancelSearch = {
  type: typeof CANCEL_SEARCH
}

export type TState = {
  users: TUsers
  searchedUsers: TUsers
  searchText: string
}

export type TUsers = TUser[]

export type TUser = {
  gender: string
  name: TName
  location: TLocation
  email: string
  dob: TDob
  phone: string
  id: TId
  picture: TPicture
}

type TDob = {
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
