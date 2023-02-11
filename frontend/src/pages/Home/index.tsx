import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './index.css'
import CardFood from '../../components/CardFood'

const Home = () => {


    return (
        <section className="main-content">
            <div className="container">
                <h1 className="text-center text-uppercase">Lanches</h1>
                <br />
                <br />
                <div className="row">

                    <CardFood />
                    <CardFood />
                    <CardFood />

                </div>
            </div>
        </section>


    )
}

export default Home