import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

function Trekking() {
  return (
    <div>
      <Header/>
      <div className='flex'>
        <Menu clicked = "trekking"/>
        <div className='min-h-[100vh]'>

        </div>
      </div>
    </div>
  );
}

export default Trekking;