import React from 'react';
import Header from '../components/Header';
import Equal from './../icons/Equal';
import EqualMore from './../icons/EqualMore';

function Reports() {
  const leftData = [
    {title: 'Период', name: 'Текущий месяц'},
    {title: 'Трекер', name: 'AppsFlyer'},
    {title: 'Группировать по', name: 'имя оффера'},
    {title: '', name: 'Название источника'},
  ]
  const ritghtData = [
    {title : 'Фильтр по ключу', btn1: 'Имя Бренда', symbol: <Equal/>, btn2: 'Тинькофф'},
    {title : 'Фильтр по назначению', btn1: 'Инсталы', symbol: <EqualMore/>, btn2: '1000'},
    {title : 'Фильтр', btn1: 'Событие', symbol: <Equal/>, btn2: 'FTD'},
    {title : '', btn1: '', symbol: '', btn2: 'Метрики'}
  ]
  const tableData = [
    {a1: 'Тинькоф Андройд', a2: 'AppsFlyer', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф Андройд', a2: 'Adjust', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф Андройд', a2: 'Keytaro', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф APK', a2: 'AppsFlyer', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф APK', a2: 'Adjust', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф APK', a2: 'Keytaro', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф IOS', a2: 'AppsFlyer', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф IOS', a2: 'Adjust', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: 'Тинькоф IOS', a2: 'Keytaro', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: '', a2: '', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: '', a2: '', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},
    {a1: '', a2: '', a3: '', a4: '', a5: '', a6: '', a7: '', a8: '', a9: '', a10: ''},

  ]
  return (
    <div className='pb-10'>
      <Header arrow="" reports="" analytics="hidden" admin="hidden"/>
      <div className='mt-10'>
        <div className='px-20 flex items-center justify-between font-bold'>
          <div className=' grid grid-cols-2 items-center gap-y-5'>
            {leftData.map((e)=>{
              return (
              <>
                <div className='col-span-1'>
                  {e.title}
                </div>
                <button className='col-span-1 bg-gray-300 py-2 w-[180px] text-center'>
                  {e.name}
                </button>
              </>
              )
              })
            }
          </div>
          <div className='grid grid-cols-10 items-center gap-y-5 gap-x-2'>
          {ritghtData.map((e)=>{
                return (
                  <>
                    <div className='col-span-3'>
                      {e.title}
                    </div>
                    {e.btn1 &&
                      <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
                        {e.btn1}
                      </button>
                    }
                    {!e.btn1 &&
                      <button className='col-span-3 py-2 w-[180px] text-center'>
                        {e.btn1}
                      </button>
                    }
                    <div className='col-span-1'>
                      {e.symbol}
                    </div>
                    <button className='col-span-3 bg-gray-300 py-2 w-[180px] text-center'>
                      {e.btn2}
                    </button>
                  </>
                )
              })
            }
          </div>
        </div>
      </div> 

      <div className='mt-5'>
        <table className='w-full'>
          <tr className='flex items-center w-full mx-auto mb-3'>
            <th className='w-[12.5%] border-l-0'>Имя оффера</th>
            <th className='w-[12.5%]'>Название источника</th>
            <th className='w-[12.5%]'>AppsFlyer attribution</th>
            <th className='w-[8.25%]'>Installs</th>
            <th className='w-[12.5%]'></th>
            <th className='w-[8.25%]'>Empressions</th>
            <th className='w-[8.25%]'></th>
            <th className='w-[8.25%]'>Conversion rate</th>
            <th className='w-[8.25%]'>Cost($)</th>
            <th className='w-[9.25%] border-r-0'></th>
            
          </tr>
          {tableData.map((e)=>{
            return (
              <tr className='flex items-center w-full mx-auto'>
              <td className='w-[12.5%] border-l-0'>{e.a1}</td>
              <td className='w-[12.5%]'>{e.a2}</td>
              <td className='w-[12.5%]'>{e.a3}</td>
              <td className='w-[8.25%]'>{e.a4}</td>
              <td className='w-[12.5%]'>{e.a5}</td>
              <td className='w-[8.25%]'>{e.a6}</td>
              <td className='w-[8.25%]'>{e.a7}</td>
              <td className='w-[8.25%]'>{e.a8}</td>
              <td className='w-[8.25%]'>{e.a9}</td>
              <td className='w-[9.25%] border-r-0'>{e.a10}</td>
              </tr>
            )
          })
          }
        </table>
      </div>

    </div>
  );
}

export default Reports;