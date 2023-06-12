import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'Jan',
    income: 2400,
    expense: 2400,
  },
  {
    month: 'Feb',
    income: 1398,
    expense: 2210,
  },
  {
    month: 'Mar',
    income: 9800,
    expense: 290,
  },
  {
    month: 'Apr',
    income: 3908,
    expense: 2000,
  },
  {
    month: 'May',
    income: 4800,
    expense: 2001,
  },
  {
    month: 'Jun',
    income: 3800,
    expense: 2200,
  },
  {
    month: 'Jul',
    income: 4300,
    expense: 1900,
  },
  {
    month: 'Aug',
    income: 4000,
    expense: 1100,
  },
  {
    month: 'Sep',
    income: 5000,
    expense: 2100,
  },
  {
    month: 'Oct',
    income: 4500,
    expense: 1100,
  },
  {
    month: 'Nov',
    income: 4900,
    expense: 1300,
  },
  {
    month: 'Dec',
    income: 5900,
    expense: 1000,
  },
];

export default class Chart extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={1000}
          height={800}
          options={{ 
            maintainAspectRatio: false 
          }}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="month" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="month" stackId="a" fill="#4C4DDC"  style={{width: 50}} borderRadius={{borderRadius:20}}/>
          <Bar dataKey="income" stackId="a" fill="#DCDB4C" style={{width: 50}}/>
          <Bar dataKey="expense" fill="#fff" style={{width: 50}}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
