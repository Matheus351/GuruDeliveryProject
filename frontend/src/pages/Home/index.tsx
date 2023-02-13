import React, { useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './index.css'
import CardFood from '../../components/CardFood'
import StoreContext from '../../components/Store/Context'

const Home = () => {

   // const { setToken } = useContext(StoreContext);


    return (
        <section className="main-content pt-0">
            <div className="container">
                <h1 className="text-center text-uppercase">Lanches</h1>
                <br />
                <br />
                <div className="row">

                    <CardFood />
                    <CardFood />
                    <CardFood />

                </div>

                {/* <div className='logout'>
                    <button type='button' onClick={() => setToken()}>
                        Sair
                    </button>
                </div> */}
            </div>
        </section>


    )
}

export default Home