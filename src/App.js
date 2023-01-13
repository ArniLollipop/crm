import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Reports from './pages/Reports';

function App() {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/reports' element = {<Reports/>}/>
      </Routes>
    </div>
  );
}

export default App;