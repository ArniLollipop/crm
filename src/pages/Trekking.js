import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import MenuContent from '../components/MenuContent';
import NewBrand from '../components/NewBrand';

function Source() {
  const [isPage, setPage] = useState(false)
  const info = {all: 'Все трекинги', new: 'Новый трекинг', tableInfo: [{name: 'AppsFlyers', bool: false}]}
  return (
    <div>
      <Header/>
      <div className='flex'>
        <Menu clicked = "trekking"/>
        {!isPage &&
          <MenuContent info={info} setPage = {setPage} isPage= {isPage}/>
        }
        {isPage &&
          <div className='min-h-[100vh] font-bold w-[80%] relative'>
            <button onClick={()=> setPage(!isPage)} className='px-7 py-1 absolute top-10 right-10 bg-gray-300'>
              {info.new}
            </button>
            <NewBrand/>
          </div>
        }
      </div>
    </div>
  );
}

export default Source;