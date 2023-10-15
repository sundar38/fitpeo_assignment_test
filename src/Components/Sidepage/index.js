import React from 'react'
import "./style.css"
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

function Sidepage() {
  return (
    <div>
        <p className='sidesection'>
            <p className='heading'>
              <HexagonOutlinedIcon/>
              <span>Dashboard</span>              
            </p>            
            <p className='heading'>
              <KeyRoundedIcon/>
              <span>Dashboard</span>              
            </p>
            
            <p className='heading'>
              <ViewInArRoundedIcon/>
              <span >Product</span>  
              <KeyboardArrowRightOutlinedIcon/>        
            </p>          
            
            <p className='heading'>
              <AccountBoxOutlinedIcon/>
              <span>Customers</span> 
              <KeyboardArrowRightOutlinedIcon />
            </p>
            <p className='heading'>
              <AccountBalanceWalletOutlinedIcon/>
              <span>Income</span>
              <KeyboardArrowRightOutlinedIcon/>
            </p>
            <p className='heading'>
              <CookieOutlinedIcon/>
              <span>Promote</span>
              <KeyboardArrowRightOutlinedIcon/>
            </p>
            <p className='heading'>
              <LiveHelpOutlinedIcon/>
              <span>Help</span>
              <KeyboardArrowRightOutlinedIcon/>
            </p> 
            <p className='bottomtext'>
              <p className="icon"><PersonOutlineRoundedIcon/></p>
              <span className='textandname'>
                <p>Evano</p>
                <span>Project Manager</span>
              </span>
              <p className="iconright"><KeyboardArrowDownOutlinedIcon/></p>
            </p>           
        </p>
        
    </div>
  )
}

export default Sidepage