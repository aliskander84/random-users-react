import {FETCH_USERS_SUCCESS, TAction, TUsers} from './types'
import {joinAPILink} from 'api/api'

export const fetchUsersSuccess = (users: TUsers): TAction => ({
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
