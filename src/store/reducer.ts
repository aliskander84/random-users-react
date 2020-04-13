import {FETCH_USERS, FETCH_USERS_SUCCESS, GET_USERS, TAction, TState} from './types'

const initialState: TState = {
  users: []
}

export const reducer = (state = initialState, action: TAction): TState => {
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