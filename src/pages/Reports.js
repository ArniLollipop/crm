import React from 'react';
import Header from '../components/Header';

function Reports() {
  const leftData = [
    {title: 'Период', name: 'Текущий месяц'},
    {title: 'Трекер', name: 'AppsFlyer'},
    {title: 'Группировать по', name: 'имя оффера'},
    {title: '', name: 'Название источника'},
  ]
  return (
    <div>
      <Header arrow="" reports="" analytics="hidden" admin="hidden"/>
      <div className='mt-10'>
        <div className='px-20 flex items-center justify-between font-bold'>
            {leftData.map((e)=>{
              <div className=' grid grid-cols-2 items-center gap-y-5'>
                <div className='col-span-1'>
                  {e.title}
                </div>
                <button className='col-span-1 bg-gray-300 py-2 w-[180px] text-center'>
                  {e.name}
                </button>
              </div>
              })
            }
          <div className='grid grid-cols-10 items-center gap-y-5'>
            <div className='col-span-3'>
              Фильтр по ключу
            </div>
            <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
              Имя Бренда
            </button>
            <div className='col-span-1 text-center'>
              ==
            </div>
            <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
              Тинькофф
            </button>
            <div className='col-span-3'>
              Фильтр по ключу
            </div>
            <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
              Имя Бренда
            </button>
            <div className='col-span-1 text-center'>
              ==
            </div>
            <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
              Тинькофф
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Reports;