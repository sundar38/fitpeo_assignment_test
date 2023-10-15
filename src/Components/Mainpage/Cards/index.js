import React from 'react'
import "./style.css"
function Cards({name, value, varypercent, comp, incordec}) {
  return (
    <div className='cards'>
      <p className='image'>{comp}</p>
      <div>
        <p>{name}</p>
        <p>${value}k</p>
        <p>
          {incordec}{varypercent}% this month
        </p>
        </div>
    </div>
  )
}

export default Cards