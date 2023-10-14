import React from 'react'
import "./style.css"
import {
    Chart as ChartJS,
    ArcElement,    
    Tooltip,
    Legend
  } from "chart.js"
  import { Pie } from 'react-chartjs-2'
  ChartJS.register(  
    ArcElement,    
    Tooltip,
    Legend
  )
function PieChart() {
    const data={
        labels: ["one", "two", "three"],
        datasets: [
            {
                data: [3,6,9],
                backgroundColor: ["orangered", "violet", "grey"]
            }
        ]
    }
    const options={}
  return (
    <div style={{height: "250px",}}>
        <Pie data={data} options={options}></Pie>
    </div>
  )
}

export default PieChart