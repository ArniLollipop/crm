import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Chevron from '../icons/Chevron'
import Eye from '../icons/Eye'
import Plus from '../icons/Plus'
import Settings from '../icons/Setting'


function Brands() {
  const [isPage, setPage] = useState(false)
  return (
    <div>
      <Header/>
      <div className='flex'>
        <Menu clicked = "brands"/>
        {!isPage &&
          <div className='min-h-[100vh] font-bold py-10 w-[80%]'>
            <div className='flex items-center px-10 justify-between w-full'>
              <div className='flex items-center gap-x-5'>
                <button className='px-7 py-1 bg-gray-300 '>
                  Все Бренды
                </button>
                <button className='px-7 py-1 bg-gray-300 '>
                  Метрики
                </button>
                <button className='px-7 py-1 bg-gray-300 '>
                  Период - текущий месяц
                </button>
              </div>
              <button onClick={()=> setPage(!isPage)} className='px-7 py-1 bg-gray-300'>
                  Новый бренд
              </button>
            </div>
            <div className='grid grid-cols-10 mt-10'>
              <div className='col-span-2'>

              </div>
              <div className='flex col-span-8 items-center pl-2 gap-x-5'>
                <p>
                  Инсталы
                </p>
                <p>
                  События
                </p>
                <p>
                  Фрод
                </p>
                <p>
                  OS
                </p>
                <p>
                  CR
                </p>
              </div>
              <div className='col-span-2 px-2 border-2 border-l-0 border-r-0 border-black py-2 flex items-center justify-between'>
                <p>asdasd</p>
                <Chevron rotate="rotate-90" className= "w-5 h-5"/>
              </div>
              <div className='col-span-8 pl-2 border-2 border-r-0 border-black py-2 relative'>
                <div className='absolute flex items-center top-1 gap-x-5 right-4'>
                  <Eye/>
                  <Plus/>
                  <Settings/>
                </div>
              </div>
            </div>
          </div>
        }
        {isPage &&
          <div className='min-h-[100vh] font-bold w-[80%] relative'>
            <button onClick={()=> setPage(!isPage)} className='px-7 py-1 absolute top-10 right-10 bg-gray-300'>
              Новый бренд
            </button>
            <div className='p-10'>
              <div className='grid grid-cols-1 gap-y-3 mt-20'>
                <label className='flex item-center w-[50%] justify-between'>Название бренда
                  <input type = "text" id="name" name="name" className='outline-none border-b-2 w-[60%] border-black'/>
                </label>
                <label className='flex item-center w-[50%] justify-between'>Юр.Лицо
                  <input type = "text" id="name" name="name" className='outline-none border-b-2 w-[60%] border-black'/>
                </label>
                <label className='flex item-center w-[50%] justify-between'>Контакты
                  <input type = "text" id="name" name="name" className='outline-none border-b-2 w-[60%] border-black'/>
                </label>
                <label className='flex item-center w-[50%] justify-between'>Аккаунт
                  <input type = "text" id="name" name="name" className='outline-none border-b-2 w-[60%] border-black'/>
                </label>
                <label className='flex item-center w-[50%] justify-between'>Платежный реквизиты
                  <input type = "text" id="name" name="name" className='outline-none border-b-2 w-[60%] border-black'/>
                </label>
              </div>
              <div className='flex items-center gap-x-10 mt-14 ml-10'>
                <button className='w-[200px] py-1 bg-gray-300'>
                  Сохранить
                </button>
                <button className='w-[200px] py-1 bg-gray-300'>
                  Добавить оффер
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Brands;