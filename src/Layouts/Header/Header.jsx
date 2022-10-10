import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FaChartBar } from 'react-icons/fa'

function Header() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/stats`);
  }
  const handelBack = () =>{
    navigate(`/`);
  }
  return (
    <nav className='header_nav'>
        <div className='header_div'>
          <div className='header_text' onClick={handelBack}>Movies DB</div>
          <div className='icon_div'>
            <FaChartBar onClick={handleClick}>Stats</FaChartBar>
          </div>
        </div>
      </nav>
  )
}

export default Header