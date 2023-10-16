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
        label: "Month wise plotting",       
        data: [1,0.5,2,1.5,1.25,0.25,1.25,2.25,2,1.5,1.5,1.75],
        // backgroundColor: "grey",
        backgroundColor: [ 'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(0, 0, 255, 1)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: ["black"],
        borderWidth: 0.1,
        borderRadius: 5,
      }
    ]
  }
  const options={}

  return (
    <div className='bar'>
      <div className='text'>
        <p>Overview Monthly Earnings</p>
        <select>
            <option value="last">Quarterly</option>
        </select>
      </div>
        <Bar 
        data={data} options={options}>
        </Bar>
    </div>
  )
}

export default Charts