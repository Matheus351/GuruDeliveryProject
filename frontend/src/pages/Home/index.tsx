import React, { useContext, useState, useEffect } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './index.css'
import CardFood from '../../components/CardFood'
import { setupAPIClient } from '../api/api'
import AppContext from '../../context/AppContext'
import { AuthContext } from '../../context/AuthContext'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBold, BiNotepad } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Home = () => {

    const { products } = useContext(AppContext)

    return (

        <>


            <div style={{ marginTop: 40 }} className="container-fluid shadow-sm">

                <div className="row">

                    <div className="col-md-5 col-sm-12 mt-5">

                        <p className='text-muted'>Perde tempo não! 😋</p>

                        <h1 className='text-uppercase'>O hamburguer mais delicioso da sua cidade</h1>

                        <div className='text-muted'>
                            É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao olhar para seu layout.
                        </div>

                        <div>
                            <b>
                                Você possui restaurante? Cadastre no botão abaixo
                            </b>

                        </div>

                        <Link to={'/restaurante'} className='btn btn-primary'>Cadastrar</Link>

                    </div>

                    <div className="col-sm-12 col-md-5">

                        <img className='img-fluid' src="burger-login.png" alt="burger" />
                    </div>


                    <div className="col align-self-center">



                        <div className="p-2 mt-2 border">
                            <AiOutlineUser className='icon' size={30} color='orange' />
                            <span style={{ borderBottom: '1px solid orange' }}>Logou</span>
                        </div>

                        <div className="p-2 mt-2 border">
                            <BiNotepad className='h-25' size={30} color='orange' />
                            <span style={{ borderBottom: '1px solid orange' }} >Pediu</span>
                        </div>
                        <div className="p-2 mt-2 border">
                            <HiOutlineLocationMarker className='icon' size={30} color='orange' />
                            <span style={{ borderBottom: '1px solid orange' }}>Chegou</span>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container-fluid">
                <div className="col-md-6 col-sm-12">
                    <h3 className='mt-3'>Pesquise o seu Hamburguer favorito!</h3>
                    <div className="input-group mb-3 mt-3">
                        <input type="text" className="form-control" placeholder="Digite o nome do Hamburguer..." aria-label="Digite o nome do Hamburguer..." aria-describedby="button-addon2" />

                        <span className="bg-white input-group-text border" id="search-addon">
                            <FiSearch size={25} color='orange' />
                        </span>
                    </div>
                </div>

            </div>


            {products && products.map(product => (
                <div key={product.id} className="row row-cols-3-md-1 row-cols-md-3">

                    <CardFood product={product}/>
                
                </div>

            ))}


         


        </>

    )
}




export default Home