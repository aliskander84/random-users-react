import {IAction} from './types'

const initialState = {
  users: [],
  hello: 'Hello!'
}

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state
  }
}