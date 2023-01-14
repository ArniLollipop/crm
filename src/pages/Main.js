import React, { useState } from 'react';
import Header from '../components/Header';
import Graphic from './../images/graphic1.png'
import Brands from '../components/Brands';
import Source from '../components/Source'
import Trekking from '../components/Trekking'
import Staff from '../components/Staff'

function Main() {
  const [isMain, setMain] = useState(true)
  const [isBrands, setBrands] = useState(false)
  const [isSource, setSource] = useState(false)
  const [isTrekking, setTrekking] = useState(false)
  const [isStaff, setStaff] = useState(false)

  return (
    <div>
      <Header arrow="hidden"/>
      <div className='flex'>
        <div className='w-[20%] bg-neutral-600 h-auto'>
          <button onClick={()=> setBrands(!isBrands)} className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-14'>
            Бренды
          </button>
          <button onClick={()=> setSource(!isSource)} className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Источники
          </button>
          <button onClick={()=> setTrekking(!isTrekking)} className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Трекинги
          </button>
          <button onClick={()=> setStaff(!isStaff)} className='w-[70%] font-bold text-center py-2 bg-red-100 mx-auto block mt-5'>
            Сотрудники
          </button>
        </div>
        {isMain &&
          <img src = {Graphic} alt="none" className='w-[80%]'/>
        }
        {isBrands &&
          <Brands/>
        }
        {isSource &&
          <Source/>
        }
        {isTrekking &&
          <Trekking/>
        }
        {isStaff &&
          <Staff/>
        }
      </div>
    </div>
  );
}

export default Main;