
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import RegisterAddress from './pages/RegisterAddress';
import Message from './components/Message';
import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login/Login'
import Pedidos from './pages/Pedidos';

import { useEffect, useContext } from 'react';
import Bus from './Utils/Bus';


import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Comprar from './pages/Comprar';
import Carrinho from './pages/Carrinho';
import RegisterProduct from './pages/RegisterProduct';
import RegisterCategory from './pages/RegisterCategory';
import { Restaurante } from './pages/RegisterRestaurant';
import Restaurantes from './pages/Restaurantes';
import { AuthProvider, AuthContext } from './context/AuthContext';
import AppContext from './context/AppContext';
import { setupAPIClient } from './pages/api/api';
import ModalPage from './pages/Modal';
import Services from './pages/Services';

function App() {


  const [products, setProducts] = useState([])

  const apiClient = setupAPIClient()

  const {user} = useContext(AuthContext)

  useEffect(() => {



    const get = async () => {
      const response = await apiClient.get('/produtos/all')
      setProducts(response.data)
    }


    get()


  }, [])


  useEffect(() => {
    window.flash = (message: string, type: string) => Bus.emit('flash', ({ message, type }));
  }, [])


  return (



    <AuthProvider>

      <AppContext.Provider value={{products}}>

        <div className="container-fluid">


          <BrowserRouter>
            <Header />
            <Message />
            <Routes>
              <Route path='/' element={<Home />}>
                <Route path='/produto/:id' element={<ModalPage />} />
              </Route>
              <Route path='/register' element={<RegisterAddress />} />
              <Route path='/register/user' element={<RegisterUser />} />
              <Route path='/login' element={ <Login/>} />
              <Route path='/pedidos' element={<Pedidos />} />
              <Route path='/comprar' element={<Comprar />} />
              <Route path='/carrinho' element={<Carrinho />} />
              <Route path='/produto/register' element={<RegisterProduct />} />
              <Route path='/categoria/register' element={<RegisterCategory />} />
              <Route path='/restaurante' element={<Restaurante />} />
              <Route path='/restaurantes/all' element={<Restaurantes />} />
              <Route path='/restaurantes' element={<Services />} />
            </Routes>

          </BrowserRouter>

        </div>

      </AppContext.Provider>

    </AuthProvider>




  );
}

export default App;
