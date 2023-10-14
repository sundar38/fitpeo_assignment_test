import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"
import "./style.css"

import {Bar} from "react-chartjs-2"
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)



function Charts() {
  const data={
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {        
        data: [1,0.5,2,1.5,1.25,0.25,1.25,2.25,2,1.5,1.5,1.75],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 0.1,
        borderRadius: 5,
      }
    ]
  }

 

  return (
    <div className='bar'>
        <Bar 
        data={data} >

        </Bar>
    </div>
  )
}

export default Charts