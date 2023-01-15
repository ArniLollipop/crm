import React from 'react';
import Chevron from '../icons/Chevron'
import Eye from '../icons/Eye'
import Plus from '../icons/Plus'
import Settings from '../icons/Setting'

function MenuContent(props) {
  const {isPage, setPage, info} = props;
  return (
    <div className='min-h-[100vh] font-bold py-10 w-[80%]'>
      <div className='flex items-center px-10 justify-between w-full'>
        <div className='flex items-center gap-x-5'>
          <button className='px-7 py-1 bg-gray-300 '>
            {info.all}
          </button>
          <button className='px-7 py-1 bg-gray-300 '>
            Метрики
          </button>
          <button className='px-7 py-1 bg-gray-300 '>
            Период - текущий месяц
          </button>
        </div>
        <button onClick={()=> setPage(!isPage)} className='px-7 py-1 bg-gray-300'>
            {info.new}
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
        {info.tableInfo.map((e)=>{
          return (
            <>
              <div className='col-span-2 px-2 border-2 border-l-0 border-r-0 border-black py-2 flex items-center justify-between'>
                <p>{e.name}</p>
                <Chevron rotate="rotate-90" className= "w-5 h-5"/>
              </div>
              <div className='col-span-8 pl-2 border-2 border-r-0 border-black py-2 relative'>
                <div className='absolute flex items-center top-1 gap-x-5 right-4'>
                  <Eye/>
                  <Plus/>
                  <Settings/>
                </div>
              </div>
            </>
          )
        })

        }
      </div>
    </div>
  );
}

export default MenuContent;