import callAPI from '../callAPI'

const registerAttendance = ({ subjectId, email, code }) => {
  return callAPI('/attendance/register', {
    method: 'post',
    data: {
      subjectId,
      email,
      code,
    },
  })
}

export default registerAttendance
