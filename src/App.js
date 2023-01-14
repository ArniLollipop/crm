import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Reports from './pages/Reports';

function App() {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/reports' element = {<Reports/>}/>
        <Route path = '*' element={<Navigate to='/login'/>}/>
      </Routes>
    </div>
  );
}

export default App;