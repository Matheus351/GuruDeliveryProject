
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import RegisterAddress from './pages/RegisterAddress';
import Message from './components/Message';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login/Login'
import Pedidos from './pages/Pedidos';

import { useEffect } from 'react';
import Bus from './Utils/Bus';
import UserLogin from './components/User/Login/Login';


import UserContext from './context/AuthUserContext';
import useFetch from './hooks/useFetch';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Comprar from './pages/Comprar';
// import User from ''





function App() {


  const [token, setToken] = useState(null)
  const [userName, setUserName] = useState(null)


  const setUserToken = (userToken:string) => {
    setToken(userToken)
  }

  const removeUserToken = () => {
    setToken(null)
    localStorage.removeItem('user')
  }

  useEffect(() => {
    window.flash = (message: string, type: string ) => Bus.emit('flash', ({ message, type }));
  }, [])

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      setToken(user.token)
      setUserName(user.name)
    }

  }, [])


  return (

    <UserContext.Provider value={{ token: token, name: userName, setUserToken ,removeUserToken }}>

      <div className="App">
       
        <BrowserRouter>
        <Header />
        <Message />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<RegisterAddress />} />
            <Route path='/register/user' element={ token? <Navigate to={'/'}/> :  <RegisterUser />} />
            <Route path='/login' element={!token ? <UserLogin /> : <Navigate to={'/'}  />} />
            <Route path='/pedidos' element={<Pedidos/>} />
            <Route path='/comprar' element={<Comprar/>} />
          </Routes>

        </BrowserRouter>
      </div>

    </UserContext.Provider>


  );
}

export default App;
