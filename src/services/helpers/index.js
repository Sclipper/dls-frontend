// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const getUserData = () => {
  const token = localStorage.getItem('AUTH_REFRESH_TOKEN')
  if (token) {
    const user = jwt_decode(token)
    return user
  }
  return null
}
