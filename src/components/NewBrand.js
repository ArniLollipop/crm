import React from 'react';

function NewBrand() {
  return (
      <div>
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
        <div className='border-t-2 pl-10 border-black w-full pt-5 font-bold'>
          <h2 className='text-2xl'>
            Новый оффер
          </h2>
        </div>
      </div>
  );
}

export default NewBrand;