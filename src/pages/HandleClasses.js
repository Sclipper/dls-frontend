import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from 'components'
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { useSubjects } from 'services/queries'
import { addStudents, addClass } from 'services/api'
import { useQueryClient } from 'react-query'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  component: {
    margin: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  formControl: {
    marginBottom: theme.spacing(2),
  },
  formControlExtraSpacing: {
    marginBottom: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}))

const HandleClasses = () => {
  const classes = useStyles()
  const useSubjectsQuery = useSubjects()
  const queryClient = useQueryClient()
  const [chip, setChipValue] = React.useState([])
  const [selectedSubject, setSelectedSubject] = React.useState('')
  const [name, setName] = React.useState('')
  const [expiresAt, setExpiresAt] = React.useState('')
  const subjects = useSubjectsQuery.data
  const handleAddStudents = () => {
    const subjectId = subjects.filter(
      (subject) => subject.name === selectedSubject,
    )?.[0]?.id
    addStudents({ subjectId, studentIds: chip }).then((res) => {
      setChipValue([])
      setSelectedSubject('')
      alert('Students added')
    })
  }
  const handleAddClass = () => {
    addClass({ name, expiresAt }).then((res) => {
      queryClient.invalidateQueries('getClasses')
      setName('')
      setExpiresAt('')
      alert('Class added')
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.component}>
        <Typography variant="h3">Add student to a class</Typography>
        <Typography variant="p">Select Class</Typography>
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
        <Typography variant="p">Add student by ID</Typography>
        <FormControl />
        <Chip value={chip} setChipValue={setChipValue} />
        <Button
          onClick={handleAddStudents}
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </div>

      <div className={classes.component}>
        <Typography variant="h2">Create class</Typography>
        <TextField
          className={classes.formControlExtraSpacing}
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
        />
        <TextField
          // className={classes.formControl}
          value={expiresAt}
          onChange={(e) => setExpiresAt(e.target.value)}
          label="Exp. Date (YYYY/MM/DD)"
          variant="outlined"
        />
        <Button
          onClick={handleAddClass}
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default HandleClasses
