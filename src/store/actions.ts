import {GET_USERS, TUsers} from './types'
import {joinAPILink} from '../api/api'

export const getUsers = (limit: number) => ({
  type: GET_USERS, payload: {
    users: fetchUsers(limit).then(res => res)
  }
})

const fetchUsers = async (limit: number) => {
  try {
    const res = await fetch(joinAPILink(limit))
    const {results} = await res.json()
    // console.log(results)
    return results as TUsers
  } catch (e) {
    console.log(e)
  }
}