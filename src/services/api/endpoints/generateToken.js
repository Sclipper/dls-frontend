import callAPI from '../callAPI'

const generateToken = (subjectId) => {
  return callAPI('/attendance/token', {
    method: 'post',
    data: {
      subjectId,
    },
  })
}

export default generateToken
