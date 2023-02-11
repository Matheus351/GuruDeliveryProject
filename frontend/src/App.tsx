
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import RegisterAddress from './pages/RegisterAddress';
import Message from './components/Message';
import RegisterUser from './pages/RegisterUser';

import { useEffect } from 'react';
import Bus from './Utils/Bus';




function App() {

  useEffect(()=>{
    window.flash = (message:string, type="success") => Bus.emit('flash', ({message, type}));
  },[])
  


  return (
    <div className="App">
     <Header/>
     <Message/>
     <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<RegisterAddress/>} />
        <Route path='/register/user' element={<RegisterUser/>}/>
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
