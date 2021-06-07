import callAPI from '../callAPI'

const getUserClasses = (email) => {
  return callAPI('/subjects/user', {
    method: 'post',
    data: { email },
  }).then(({ data }) => {
    return data.map((x) => ({
      ...x,
      // eslint-disable-next-line no-underscore-dangle
      id: x._id,
    }))
  })
}

export default getUserClasses
