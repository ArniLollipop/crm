import React from 'react';

function Login() {
  return (
    <div className='w-full min-h-[90vh] flex items-center justify-center'>
      <div className=' p-5 rounded-xl bg-gray-400 w-[400px]'>
        <p className='text-2xl text-center text-white'>Авторизация</p>
        <label className=''>
          <input type= "email" placeholder='Введите ваш email' id = "email" className='outline-none text-white placeholder:text-white bg-transparent mt-5 w-full border-2 border-white rounded-xl p-3 h-fit mx-auto'/>
        </label>
        <label className=''>
          <input type= "password" placeholder='Введите ваш пароль' id = "email" className='outline-none text-white placeholder:text-white bg-transparent mt-5 w-full border-2 border-white rounded-xl p-3 h-fit mx-auto'/>
        </label>
        <button className='px-4 py-2 bg-white rounded-xl mt-5 font-semibold mx-auto w-fit block hover:shadow-sm transition-all duration-300'>
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;