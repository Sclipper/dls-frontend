import React from 'react'
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useSubjects } from 'services/queries'
import { generateToken } from 'services/api'

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

const TeacherView = ({ user }) => {
  const classes = useStyles()
  const useSubjectsQuery = useSubjects()

  const [selectedSubject, setSelectedSubject] = React.useState('')
  const [code, setCode] = React.useState('')
  const subjects = useSubjectsQuery.data
  const handleClick = () => {
    generateToken(
      subjects.filter((x) => x.name === selectedSubject)[0].id,
    ).then(({ data }) => {
      setCode(data.code)
    })
  }

  return (
    <div className={classes.container}>
      {!code ? (
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
          <Button onClick={handleClick} color="primary" variant="contained">
            Generate
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h3">{code}</Typography>
          <Button onClick={handleClick} color="primary" variant="contained">
            Get new code
          </Button>
        </>
      )}
    </div>
  )
}

export default TeacherView
