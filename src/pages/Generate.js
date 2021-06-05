import React from 'react'
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getUserData } from 'services/helpers'
import { useSubjects } from 'services/queries'
import { generateToken } from 'services/api'
import TeacherView from 'components/TeacherView'
import StudentView from 'components/StudentView'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '10rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const Generate = () => {
  const classes = useStyles()
  const user = getUserData()

  return (
    <div className={classes.container}>
      {[('teacher', 'admin')].includes(user.role) ? (
        <TeacherView user={user} />
      ) : (
        <StudentView user={user} />
      )}
    </div>
  )
}

export default Generate
