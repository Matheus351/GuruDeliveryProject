import React, { useContext, useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './index.css'
import CardFood from '../../components/CardFood'
import { setupAPIClient } from '../api/api'
import StoreContext from '../../components/Store/Context'

const Home = () => {

   // const { setToken } = useContext(StoreContext);
   const [products, setProducts] = useState([])

   const apiClient = setupAPIClient()

   useEffect(() => {

       

       const get = async () => {
           const response = await apiClient.get('/produtos/all')
           setProducts(response.data)
       }


       get()


   }, [])


    return (
        <section className="main-content">
            <div className="container">
                <h1 className="text-center text-uppercase mt-5">Lanches</h1>
                <br />
                <br />
                <div className="row">

                    {products.map(product=>(
                        <CardFood key={product.id}  product={product}  />
                    ))}

                </div>

            </div>
        </section>


    )
}

export default Home