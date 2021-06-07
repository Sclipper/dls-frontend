import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Grid, Paper, Theme, Typography } from '@material-ui/core'
import { useAttendance, useSubjects } from 'services/queries'
import { getUserData } from 'services/helpers'
import LineChartComponent from 'components/LineChartComponent'
import BarChartComponent from 'components/BarChartComponent'
import RadialChart from 'components/RadialChart'
import MultiBarChart from 'components/MultiBarChart'

const useStyles = makeStyles((theme) => ({}))

const getSubjectInfo = (subjId, subjects) => {}

const Info = () => {
  const classes = useStyles()

  const user = getUserData()
  const useAttendanceQuery = useAttendance(user.email)
  const useSubjectsQuery = useSubjects()

  const subjects = useSubjectsQuery.data
  const { data } = useAttendanceQuery
  if (useAttendanceQuery.isLoading || useSubjectsQuery.isLoading) {
    return 'Loading...'
  }

  console.log('data', data)
  return (
    <Grid style={{ padding: '2rem' }} container spacing={3}>
      <Grid item xs={6}>
        <Paper>
          <Typography variant="h5">
            {' '}
            Average attendance over the week
          </Typography>
          <LineChartComponent />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Typography variant="h5"> Total attendance per class</Typography>
          <BarChartComponent />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Typography variant="h5"> Attended vs all classes</Typography>
          <RadialChart />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Typography variant="h5">Your attendance vs top attendees</Typography>
          <MultiBarChart />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Info
