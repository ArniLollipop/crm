import React from 'react';
import Header from '../components/Header';
import Graphic from './../images/graphic1.png'

function Main() {
  return (
    <div>
      <Header arrow="hidden"/>
      <div className='flex'>
        <div className='w-[20%] bg-neutral-600 h-auto'>
          <button className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-14'>
            Бренды
          </button>
          <button className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Источники
          </button>
          <button className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Трекинги
          </button>
          <button className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Сотрудники
          </button>
        </div>
        <img src = {Graphic} alt="none" className='w-[80%]'/>
      </div>
    </div>
  );
}

export default Main;