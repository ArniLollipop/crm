import React from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from './../icons/LeftArrow'

function Header(props) {
  const btnClass = "w-[130px] font-bold text-center py-2 bg-red-100"
  const arrowClass = "w-fit absolute -top-5 left-3"
  return (
    <div className="bg-gray-300 w-full p-3">
      <div className='container mx-auto flex items-center'>
        <div className='w-[30%] relative'>
          <Link to='/' className={props.arrow + ' ' + arrowClass}>
            <LeftArrow/>
          </Link>
        </div>
        <div className='flex items-center justify-between w-full'>
          <div className='flex items-center gap-x-5'>
            <Link to='/reports' className={btnClass + ' ' + props.report}>
              Отчеты
            </Link>
            <button className={btnClass + ' ' + props.analytics}>
              Аналитика
            </button>
            <button className={btnClass + ' ' + props.admin}>
              Админ.Панель
            </button>
          </div>
          <div className='flex items-center gap-x-10'>
            <p className=' text-xl font-bold'>Alex Khromov</p>
            <div className=' rounded-full flex items-center justify-center w-[50px] h-[50px] text-2xl  bg-red-400 font-bold'>
              AX
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
