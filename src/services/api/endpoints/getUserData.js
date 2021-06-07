import callAPI from '../callAPI'

const getUserData = ({ email }) => {
  return callAPI('/users/data', {
    method: 'post',
    data: { email },
  }).then(({ data }) => {
    return data
  })
}

export default getUserData
