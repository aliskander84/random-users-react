import {FETCH_USERS_SUCCESS, GET_USERS, TFetchUsers, TGetUsers, TUsers} from './types'
import {joinAPILink} from '../api/api'

export const getUsers = (limit: number): TGetUsers => {
  let users: TUsers = []

  // fetchUsers(limit)
  //   .then(res => res ? users = res : null)

  // console.log(users)

  return {
    type: GET_USERS,
    users: users
  }
}

export const fetchUsersSuccess = (users: TUsers) => ({
  type: FETCH_USERS_SUCCESS,
  users
})

export const fetchUsers = (limit: number) => {
  return async (dispatch: Function) => {
    try {
      const res = await fetch(joinAPILink(limit))
      const {results} = await res.json()
      dispatch(fetchUsersSuccess(results))
    } catch (e) {
      console.log(e)
    }
  }
}