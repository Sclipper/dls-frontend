import callAPI from '../callAPI'

const getAttendance = ({ email }) => {
  return callAPI('/attendance', {
    method: 'post',
    data: {
      email,
    },
  })
}

export default getAttendance
