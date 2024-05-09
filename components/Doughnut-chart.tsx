"use client"

import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


interface DoughtnutChartProps {
  accounts: number
}
const DoughtnutChart = ({accounts}: DoughtnutChartProps) => {

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1200, 700, 500],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      },
    ],
    labels: ['Bank1', 'Bank2', 'Bank3']
  }
  return (

<Doughnut data={data} />
  )
}

export default DoughtnutChart
