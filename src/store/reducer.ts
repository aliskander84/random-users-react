import {CANCEL_SEARCH, FETCH_USERS_SUCCESS, GET_USERS, SEARCH, SET_SEARCH_TEXT, TAction, TState} from './types'

const initialState: TState = {
  users: [],
  searchedUsers: [],
  searchText: ''
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
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      }
    case SEARCH:
      return {
        ...state,
        searchedUsers: state.users.filter(u => {
          const {name: {first, last}} = u
          const matchFirst = first.match(new RegExp(state.searchText, 'gi'))
          const matchLast = last.match(new RegExp(state.searchText, 'gi'))
          return matchFirst || matchLast
        })
      }
    case CANCEL_SEARCH:
      return {
        ...state,
        searchedUsers: []
      }
    default:
      return state
  }
}
