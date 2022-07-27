import React from 'react';
import './Home.css';
import Forms from './Forms';
import img from './img/img.png';

function Home() {

  return (
    <div className='home'>
        <div className='home_form'>
            <h1>Welcome Back</h1>
            <p>Sub-title text goes here</p>
            <Forms/>
        </div>
        <div className='home_image'>
            <img
                src={img}
                alt=""
            />
        </div>
    </div>
  )
}

export default Home