import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'DLS',
    Attendance: 25,
    amt: 2400,
  },
  {
    name: 'Software Testing',
    Attendance: 10,
    amt: 2210,
  },
  {
    name: 'Security',
    Attendance: 20,
    amt: 2290,
  },
]

const BarChartComponent = () => {
  return (
    <BarChart
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
      <Bar barSize={45} dataKey="Attendance" fill="#82ca9d" />
    </BarChart>
  )
}
export default BarChartComponent
