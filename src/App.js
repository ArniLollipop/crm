import React, { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Brands from './pages/Brands';
import Login from './pages/Login'
import Main from './pages/Main'
import Reports from './pages/Reports';
import Source from './pages/Source';
import Staff from './pages/Staff';
import Trekking from './pages/Trekking';

function App() {
  const navigate = useNavigate()
  const [isLogin, setLogin] = useState(false);

  useEffect(()=>{
    
    if(!isLogin){
      setLogin(!isLogin)
      return navigate('/login')
    }
  }, [isLogin])

  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/' element = {<Main/>}/>
        <Route path = '/reports' element = {<Reports/>}/>
        <Route path = '/brands' element = {<Brands/>}/>
        <Route path = '/source' element = {<Source/>}/>
        <Route path = '/trekking' element = {<Trekking/>}/>
        <Route path = '/staff' element = {<Staff/>}/>
      </Routes>
    </div>
  );
}

export default App;