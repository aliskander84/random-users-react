export const API_BASE_URL = 'https://randomuser.me/api/'
export const FIRST_PARAM_URL = '?results='
export const OTHER_PARAM_URL = '&inc='
export const PARAMS: string = [
  'id', 'picture', 'name', 'location', 'email', 'gender', 'dob', 'phone'
].join(',')

export const joinAPILink = (usersLimit: number): string => {
  return `${API_BASE_URL}${FIRST_PARAM_URL}${usersLimit}${OTHER_PARAM_URL}${PARAMS}`
}