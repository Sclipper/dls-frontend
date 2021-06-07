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
    You: 25,
    John: 30,
    Samantha: 55,
  },
  {
    name: 'Software Testing',
    You: 10,
    John: 22,
    Samantha: 21,
  },
  {
    name: 'Testing',
    You: 20,
    John: 19,
    Samantha: 25,
  },
]

const MultiBarChart = () => {
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <Tooltip />
      <Legend />
      <Bar barSize={35} yAxisId="left" dataKey="You" fill="#FFA874" />
      <Bar barSize={35} yAxisId="left" dataKey="John" fill="#82ca9d" />
      <Bar barSize={35} yAxisId="left" dataKey="Samantha" fill="#4f557c" />
    </BarChart>
  )
}
export default MultiBarChart
