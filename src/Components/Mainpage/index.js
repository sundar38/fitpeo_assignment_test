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
    <div className='textandinput'>    
      Hello Shahrukh
      <input type='text' placeholder='Search' className='search'></input>
      </div>  
      <div className='mainpage'>
        <Cards name="Earning" value={273} varypercent={38} comp={<CurrencyExchangeRoundedIcon/>} incordec={<ArrowUpwardIcon/>}/>
        <Cards name="Orders" value={273} varypercent={2} comp={<SpeakerNotesRoundedIcon/>} incordec={<ArrowDownwardIcon/>}/>
        <Cards name="Balance" value={273} varypercent={2} comp={<AccountBalanceWalletOutlinedIcon/>} incordec={<ArrowDownwardIcon/>}/>
        <Cards name="Total Sales" value={273} varypercent={11} comp={<ShoppingCartIcon/>} incordec={<ArrowUpwardIcon/>}/>
      </div>
      <div className='chart'>
        <Charts/>
        <PieChart/>
      </div>

      <table>
        <tr className='firstrow'>
          <td> Product Sell</td>
          <div className='rowarrange'>
          <td><input type='text' placeholder='Search' className='search'/></td>
          <td>
            <select>
              <option value="last">Last 30 Days</option>
            </select>
          </td>
          </div>
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
      {/* <table class="table">
  <thead>
    <tr>
      <th scope="col" colspan="2">Product Name</th>
      <th scope="col">Stock</th>
      <th scope="col">Price</th>
      <th scope="col">Total Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}






    </div>
  )
}

export default Mainpage