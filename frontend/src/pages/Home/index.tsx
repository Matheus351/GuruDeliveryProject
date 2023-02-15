import React, { useContext, useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './index.css'
import CardFood from '../../components/CardFood'
import { setupAPIClient } from '../api/api'
import AppContext from '../../context/AppContext'
import { AuthContext } from '../../context/AuthContext'

const Home = () => {

    const [cartItems, setCartItems] = useState([])
    // const [amount, setAmount] = useState(0)

    const { products } = useContext(AppContext)
    const app = useContext(AuthContext)

  

    const setProductSelected = (product) => {

        if (products) {

            const exist = cartItems.find(item => item.id === product.id)

            if (exist) {
                setCartItems(cartItems
                    .map(item =>
                        item.id === product.id ? { ...exist, amount: exist.amount + 1 } : item))

            }
            else {
                setCartItems([...cartItems, { ...product, amount: 1 }])
            }
        }
    }


    const removeProductSelected = (product) => {

        const exist = cartItems.find(item => item.id === product.id)

        if (exist.amount === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id))
        } else {
            setCartItems(cartItems
                .map(item =>
                    item.id === product.id ? { ...exist, amount: exist.amount - 1 } : item))
                   
        }

    }


    useEffect(() => {


        localStorage.setItem('carrinho', JSON.stringify(cartItems))

    }, [cartItems])

   

    return (
        <section className="main-content p-5">
            
            <div  style={{position:'relative'}} className="">
            <h1 className="text-center">Produtos</h1> 
               {!products && <p className='text-muted text-center'>Hainda não há nada</p>}
                {/* <br /> */}
                {/* <br /> */}
                <div className="row">
                

                    { products && products.map(product => (
                        <CardFood key={product.id} removeProductSelected={removeProductSelected} setProductSelected={setProductSelected} product={product} />
                    ))}

                </div>

            </div>
        </section>


    )
}

export default Home