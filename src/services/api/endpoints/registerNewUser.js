import callAPI from '../callAPI'

const registerNewUser = ({ firstName, lastName, email, role, password }) => {
  return callAPI('/auth/register', {
    method: 'post',
    data: { firstName, lastName, email, role, password },
  }).then(({ data }) => {
    if (data.refreshToken) {
      localStorage.setItem('AUTH_REFRESH_TOKEN', data.refreshToken)
    }
    return data
  })
}

export default registerNewUser
