import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from 'components'
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { useSubjects } from 'services/queries'
import { addStudents } from 'services/api'

const useStyles = makeStyles((theme) => ({}))

const HandleClasses = () => {
  const classes = useStyles()
  const useSubjectsQuery = useSubjects()
  const [chip, setChipValue] = React.useState([])
  const [selectedSubject, setSelectedSubject] = React.useState('')

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

  return (
    <div className={classes.container}>
      <div className={classes.component}>
        <Typography variant="h3">Add Students to a class</Typography>
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
        <Typography variant="p">Add students by ID</Typography>
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
        <Typography variant="h2">Add classes</Typography>
        {/* <Chip value={chip} setChipValue={setChipValue} /> */}
      </div>
    </div>
  )
}

export default HandleClasses
