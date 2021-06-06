import callAPI from '../callAPI'

const addClass = ({ name, expiresAt }) => {
  return callAPI('/subjects/create', {
    method: 'post',
    data: {
      name,
      expiresAt,
    },
  })
}

export default addClass
