import React from 'react';
import './Navbar.css'
import { Button } from 'antd';
import 'antd/dist/antd.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar_left'>
            <h2>ATools<span>.</span></h2>
        </div>
        <div className='navbar_right'>
        <Button style={{width:"150px", fontWeight:"600", fontSize:"11px", background:"#023047", color:"white" }}>
            Start Free Trial</Button>
        <Button style={{width:"150px", fontWeight:"600", fontSize:"11px", background:"#fb8500", color:"white" }}>
            Login</Button>
        </div>
    </div>
  )
}

export default Navbar