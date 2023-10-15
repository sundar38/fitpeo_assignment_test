import React from 'react'
import "./style.css"
import Cards from './Cards'
import Charts from './Charts'
import PieChart from './PieChart'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import SpeakerNotesRoundedIcon from '@mui/icons-material/SpeakerNotesRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Mainpage() {
  return (
    <div className='Mainpage'>       
      Hello Shahrukh
      <input type='text' placeholder='Search' className='search'></input>
      <div className='mainpage'>
        <Cards name="Earning" value={273} varypercent={37.8} comp={<CurrencyExchangeRoundedIcon/>} incordec={<ArrowUpwardIcon/>}/>
        <Cards name="Orders" value={273} varypercent={2} comp={<SpeakerNotesRoundedIcon/>} incordec={<ArrowDownwardIcon/>}/>
        <Cards name="Balance" value={273} varypercent={2} comp={<AccountBalanceWalletOutlinedIcon/>} incordec={<ArrowDownwardIcon/>}/>
        <Cards name="Total Sales" value={273} varypercent={11} comp={<ShoppingCartIcon/>} incordec={<ArrowUpwardIcon/>}/>
      </div>
      <div className='chart'>
        <Charts/>
        <PieChart/>
      </div>

      <table>
        <tr>
          <td> Product Sell</td>
          <td><input type='text' placeholder='Search' className='search'/></td>
          <td>
            <select>
              <option value="last">Last 30 Days</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Product Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Total Sales</th>
        </tr>
        <tr>
          <td>Abstract 3D</td>
          <td>32 in stock</td>
          <td>45.99$</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Sarphens illustration</td>
          <td>32 in stock</td>
          <td>45.99$</td>
          <td>20</td>
        </tr>
      </table>
    </div>
  )
}

export default Mainpage