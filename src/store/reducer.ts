import {GET_USERS, TGetUsers, TState, TUsers} from './types'

const initialState: TState = {
  users: [] as TUsers
}

export const reducer = (state = initialState, action: TGetUsers): TState => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.users
      }
    default:
      return state
  }
}