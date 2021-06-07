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
import { usePrivateSubjects } from 'services/queries'
import { registerAttendance } from 'services/api'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

const StudentView = ({ user }) => {
  const classes = useStyles()
  const useUserPrivateSubjectsQuery = usePrivateSubjects(user.email)
  const [selectedSubject, setSelectedSubject] = React.useState('')
  const [code, setCode] = React.useState('')
  const [isRegistered, setIsRegistered] = React.useState(false)

  const subjects = useUserPrivateSubjectsQuery.data

  const handleClick = () => {
    registerAttendance({
      subjectId: subjects.filter((x) => x.name === selectedSubject)[0].id,
      email: user.email,
      code,
    }).then(({ data }) => {
      setIsRegistered(true)
    })
  }

  return (
    <div className={classes.container}>
      {!isRegistered ? (
        <>
          <Typography>Select Class</Typography>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              label="Subject"
            >
              <MenuItem value="">
                <em> </em>
              </MenuItem>
              {subjects?.map((subject) => (
                <MenuItem key={subject.id} value={subject.name}>
                  {subject.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={classes.formControl}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            label="Code"
            variant="outlined"
          />
          <Button onClick={handleClick} color="primary" variant="contained">
            Register
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h3">Registered Succesfully</Typography>
        </>
      )}
    </div>
  )
}

export default StudentView
