import React from 'react';
import Header from '../components/Header';
import Graphic from './../images/graphic1.png'
import Menu from '../components/Menu';

function Main() {
  

  return (
    <div>
      <Header arrow="hidden"/>
      <div className='flex'>
        <Menu/>
        <img src = {Graphic} alt="none" className='w-[80%]'/>
      </div>
    </div>
  );
}

export default Main;