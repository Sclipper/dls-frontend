// @flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Theme } from '@material-ui/core'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Monday',
    Attendance: 5,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    Attendance: 2,
    amt: 2210,
  },
  {
    name: 'Wednesday',
    Attendance: 3,
    amt: 2290,
  },
  {
    name: 'Thursday',
    Attendance: 1,
    amt: 2000,
  },
  {
    name: 'Friday',
    Attendance: 0,
    amt: 2181,
  },
]

const useStyles = makeStyles((theme) => ({}))

const LineChartComponent = () => {
  const classes = useStyles()
  return (
    <LineChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        strokeWidth={3}
        activeDot={{ r: 8 }}
        type="monotone"
        dataKey="Attendance"
        stroke="#FFA874"
      />
    </LineChart>
  )
}

export default LineChartComponent
