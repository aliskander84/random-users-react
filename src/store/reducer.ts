import {FETCH_USERS_SUCCESS, GET_USERS, action, state} from './types'

const initialState: state = {
  users: []
}

export const reducer = (state = initialState, action: action): state => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}
