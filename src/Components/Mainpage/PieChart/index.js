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
        // labels: ["one", "two", "three"],
        datasets: [
            {
                data: [3,6,9],
                backgroundColor: ["orangered", "violet", "grey"]
            }
        ]
    }
 
  return (  
    <div className='entire'>
        <p>Customers that buy products</p>
    <div style={{height: "250px"}} className='piechart'>
        <Pie data={data} ></Pie>
    </div>
    </div>
   
  )
}

export default PieChart