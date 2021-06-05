import callAPI from '../callAPI'

const getClasses = () => {
  return callAPI('/subjects', {
    method: 'get',
  }).then(({ data }) => {
    return data.map((x) => ({
      ...x,
      // eslint-disable-next-line no-underscore-dangle
      id: x._id,
    }))
  })
}

export default getClasses
