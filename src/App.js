import './App.css';
import React, { useState } from 'react';
import MainAssessment from './components/index'
import BestLineChart from './components/graphs/BestPerformanceLineChart'
import LowLineChart from './components/graphs/LeastPerformanceLineChart'
import ReferralChart from './components/graphs/ReferralLineChart'
import ProductTable from './components/graphs/ProductLineChart'


const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function App() {

  const [state, setState] = React.useState(data) 
  const [counter, setCounter] = React.useState(0)
  const onHandleClick = () => {
    // update state
    let dataTest = [
      {
        name: "Page A",
        uv: 4000,
        pv: 3400,
        amt: 2400
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 2398,
        amt: 2210
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 7800,
        amt: 2290
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
      }
    ];

    dataTest = dataTest.sort((e) => {
      console.log(e);
     return  Math.random() - 0.5
    })

    setState(dataTest);
    setCounter(counter + 1);
  }

  const handleReset = () => {
    setState(data)
    setCounter(0);
  }
  return (
    <div class="m-5">
    <MainAssessment />
    <div className="grid grid-cols-2 gap-6">
      <BestLineChart data={data}/>
      <LowLineChart data={data}/>
      <ReferralChart data={data}/>
      <ProductTable data={data}/>
    </div>
    </div>
  );
}

export default App;
