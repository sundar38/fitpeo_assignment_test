import React from 'react'
import "./style.css"
function Cards({name, value, varypercent}) {
  return (
    <div className='cards'>
        <p>{name}</p>
        <p>{value}</p>
        <p>{varypercent}% this month</p>
    </div>
  )
}

export default Cards