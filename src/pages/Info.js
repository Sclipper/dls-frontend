import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Grid, Theme } from '@material-ui/core'
import { useAttendance, useSubjects } from 'services/queries'
import { getUserData } from 'services/helpers'
import LineChartComponent from 'components/LineChartComponent'

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
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <LineChartComponent />
      </Grid>
      {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>  */}
    </Grid>
  )
}

export default Info
