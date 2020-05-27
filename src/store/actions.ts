import {CANCEL_SEARCH, FETCH_USERS_SUCCESS, SEARCH, SET_SEARCH_TEXT, TAction, TUsers} from './types'
import {joinAPILink} from 'api/api'

export const fetchUsersSuccess = (users: TUsers): TAction => ({
  type: FETCH_USERS_SUCCESS,
  users
})

export const setSearchText = (searchText: string): TAction => ({
  type: SET_SEARCH_TEXT,
  searchText
})

export const search = (): TAction => ({
  type: SEARCH
})

export const cancelSearch = (): TAction => ({
  type: CANCEL_SEARCH
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
