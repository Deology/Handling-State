
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Date A-B',
    merchant_1: 70,
    merchant_2: 45,

    amt: 2400,
  },
  {
    name: 'Date B-C',
    merchant_1: 80,
    merchant_2: 110,

    amt: 2210,
  },
  {
    name: 'Date C-D',
    merchant_1: 40,
    merchant_2: 43,

    amt: 2290,
  },
  {
    name: 'Date D-E',
    merchant_1: 120,
    merchant_2: 44,

    amt: 2000,
  },
  {
    name: 'Date E-F',
    merchant_1: 80,
    merchant_2: 170,

    amt: 2181,
  },
  {
    name: 'Date F-G',
    merchant_1: 85,
    merchant_2: 20,

    amt: 2500,
  },
  {
    name: 'Date G-H',
    store_1: 10,
    Store_2: 20,

    amt: 2500,
  },

];

function ReferralLineChart() {
  return (
    <>
<div className="bg-white rounded-md shadow-lg p-5">
      <h2><strong>REFERRALS BY MERCHANT AND DATE</strong></h2>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <LineChart
          width={500}
          height={500}
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
          <Line type="monotone" dataKey="merchant_1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="merchant_2" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
      </div>
  </>
  );
}

export default ReferralLineChart;
