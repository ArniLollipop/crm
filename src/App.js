import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;