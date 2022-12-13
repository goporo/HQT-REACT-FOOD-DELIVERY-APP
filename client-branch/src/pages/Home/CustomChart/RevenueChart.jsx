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
import { formatVND, shortFormatVND } from 'utils/currencyFormatter';
import styles from './CustomChart.module.scss';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.label}>{`${moment(label).format(
          'DD/MM/yyyy'
        )}`}</p>
        <p className={styles.payload}>{`${formatVND(payload[0].value)}`}</p>
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
        <YAxis
          dataKey='revenue'
          tickFormatter={(value) => shortFormatVND(value)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          dataKey='revenue'
          type='monotone'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomChart;
