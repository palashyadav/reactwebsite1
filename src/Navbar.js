import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {




  return (
    <>
    
        
    <div className='nav1'>
    <div className='img1'>
            <img src='https://www.bensnaturalhealth.com/blog/wp-content/uploads/2021/04/What-to-Eat-When-You-Have-Low-Blood-Sugar.jpg'  className='imgcontent1' />
        </div>
        <div className='contents'>
        <h2>DIET JUNCTION</h2>
        <div>
        <ul className='list1'>
        <li><Link to='/' className='li1'>HOME</Link></li>
        <li><Link to='/about' className='li1'> ABOUT</Link></li>
        <li><Link to='/contact' className='li1'>CONTACT</Link></li>
        <li><Link to='/Healthchecker' className='li1'>HEALTHCHECKER</Link></li>
        <li><Link to='/caloriemeter' className='li1'>CALORIEMETER</Link></li>
        <li><Link to='/proteinmeter' className='li1'>PROTEINMETER</Link></li>
        </ul>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar;
