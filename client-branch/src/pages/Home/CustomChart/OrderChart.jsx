import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import moment from 'moment';
import styles from './CustomChart.module.scss';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.label}>{`${moment(label).format(
          'DD/MM/yyyy'
        )}`}</p>
        <p className={styles.payload}>{`${payload[0].value} orders`}</p>
      </div>
    );
  }

  return null;
};

const CustomChart = ({ data, y }) => {
  return (
    <ResponsiveContainer width='99%' aspect={3}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='time' tick={false} />
        <YAxis dataKey='orders' />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dataKey='orders'
          type='monotone'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
