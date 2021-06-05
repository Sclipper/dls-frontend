import callAPI from '../callAPI'

const addStudents = ({ subjectId, studentIds }) => {
  return callAPI('/subjects/add/student', {
    method: 'post',
    data: {
      subjectId,
      studentIds,
    },
  })
}

export default addStudents
