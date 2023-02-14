
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import RegisterAddress from './pages/RegisterAddress';
import Message from './components/Message';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login/Login'
import Pedidos from './pages/Pedidos';

import { useEffect, useContext } from 'react';
import Bus from './Utils/Bus';
import UserLogin from './components/User/Login/Login';


import UserContext from './context/AuthUserContext';
import useFetch from './hooks/useFetch';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Comprar from './pages/Comprar';
import Carrinho from './pages/Carrinho';
import RegisterProduct from './pages/RegisterProduct';
import RegisterCategory from './pages/RegisterCategory';
// import User from ''
import { AuthProvider, AuthContext } from './context/AuthContext';
import AppContext from './context/AppContext';



function App() {


  const [products, setProducts] = useState([])
  const [token, setToken] = useState(null)
  const [userName, setUserName] = useState(null)

  const appContext = useContext(AppContext)

  const setUserToken = (userToken: string) => {
    setToken(userToken)
  }

  const removeUserToken = () => {
    setToken(null)
    localStorage.removeItem('user')
  }

  useEffect(() => {
    window.flash = (message: string, type: string) => Bus.emit('flash', ({ message, type }));
  }, [])

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      setToken(user.token)
      setUserName(user.name)
    }

  }, [])


  return (

    <AuthProvider>

        <div className="App">

          <BrowserRouter>
            <Header />
            <Message />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<RegisterAddress />} />
              <Route path='/register/user' element={token ? <Navigate to={'/'} /> : <RegisterUser />} />
              <Route path='/login' element={!token ? <UserLogin /> : <Navigate to={'/'} />} />
              <Route path='/pedidos' element={<Pedidos />} />
              <Route path='/comprar' element={<Comprar />} />
              <Route path='/carrinho' element={<Carrinho />} />
              <Route path='/produto/register' element={<RegisterProduct />} />
              <Route path='/categoria/register' element={<RegisterCategory />} />
            </Routes>

          </BrowserRouter>
        </div>

  

    </AuthProvider>




  );
}

export default App;
