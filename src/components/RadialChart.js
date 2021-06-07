import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'DLS',
    uv: 25,
    fill: '#ffc658',
  },
  {
    name: 'Software Testing',
    uv: 10,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Security',
    uv: 20,
    pv: 1398,
    fill: '#8dd1e1',
  },
  // {
  //   name: 'unknow',
  //   uv: 6.67,
  //   pv: 4800,
  //   fill: '#ffc658',
  // },
]

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
}

const RadialChart = () => {
  return (
    <RadialBarChart
      cx="50%"
      cy="50%"
      width={600}
      height={400}
      innerRadius="20%"
      outerRadius="80%"
      barSize={20}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: 'insideStart', fill: '#fff' }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  )
}
export default RadialChart
