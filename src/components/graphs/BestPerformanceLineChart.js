
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

const data = [
  {
    name: 'Date A-B',
    store_1: 70,
    store_2: 45,
    store_3: 40,
    store_4: 40,
    store_5: 40,
    amt: 2400,
  },
  {
    name: 'Date B-C',
    store_1: 80,
    store_2: 110,
    store_3: 83,
    store_4: 10,
    store_5: 120,
    amt: 2210,
  },
  {
    name: 'Date C-D',
    store_1: 40,
    store_2: 43,
    store_3: 40,
    store_4: 80,
    store_5: 110,
    amt: 2290,
  },
  {
    name: 'Date D-E',
    store_1: 120,
    store_2: 44,
    store_3: 83,
    store_4: 40,
    store_5: 40,
    amt: 2000,
  },
  {
    name: 'Date E-F',
    store_1: 80,
    store_2: 170,
    store_3: 30,
    store_4: 75,
    store_5: 150,
    amt: 2181,
  },
  {
    name: 'Date F-G',
    store_1: 85,
    store_2: 20,
    store_3: 40,
    store_4: 35,
    store_5: 35,
    amt: 2500,
  },
  {
    name: 'Date G-H',
    store_1: 10,
    store_2: 20,
    store_3: 80,
    store_4: 38,
    store_5: 35,
    amt: 2500,
  },

];

function BestPerformance() {
  return (
    <>
    <div className="bg-white rounded-md shadow-lg p-5">
      <h2><strong>TOP 5 BEST PERFORMING STORES</strong></h2>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <LineChart
          width={500}
          height={1000}
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
          <Line type="monotone" dataKey="store_1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="store_2" stroke="green" />
          <Line type="monotone" dataKey="store_3" stroke="blue" />
          <Line type="monotone" dataKey="store_4" stroke="orange" />
          <Line type="monotone" dataKey="store_5" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
      </div>
  </>
  );
}

export default BestPerformance;
