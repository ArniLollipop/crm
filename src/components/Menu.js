import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  const buttonClass = ' w-[70%] font-bold text-center bg-red-100 py-2 mx-auto block mb-5';
  return (
    <div className='w-[20%] bg-neutral-600 h-auto pt-14'>
      <Link to = '/brands' className={props.clicked === 'brands' ? 'opacity-60'.concat(buttonClass) : buttonClass}>
        Бренды
      </Link>
      <Link to='/source' className={props.clicked === 'source' ? 'opacity-60'.concat(buttonClass) : buttonClass}>
        Источники
      </Link>
      <Link to='/trekking' className={props.clicked === 'trekking' ? 'opacity-60'.concat(buttonClass) : buttonClass}>
        Трекинги
      </Link>
      <Link to='/staff' className={props.clicked === 'staff' ? 'opacity-60'.concat(buttonClass) : buttonClass}>
        Сотрудники
      </Link>
    </div>
  );
}

export default Menu;