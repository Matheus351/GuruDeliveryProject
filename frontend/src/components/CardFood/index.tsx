import React, { useEffect, useState, useContext} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './CardFood.css'
import AppContext from '../../context/AppContext'
import { Link, useLocation, Outlet } from 'react-router-dom'
// import Modal from 'react-modal'
import Modal from '../Modal'
import Button from 'react-bootstrap/Button';

const CardFood = ({ product }) => {

    const location = useLocation();

    return (


        <>
       
         
         <div className="col">
         <div className="food-card">
             <div className="food-card_img">
             <Link to={`/produto/${product.id}`} state={{ background: location }} >
                 <img src={product.image} alt="" />
                 </Link>
                 <a href="#!"><i className="far fa-heart"></i></a>
             </div>
             <div className="food-card_content">
                 <div className="food-card_title-section">
                     <a href="#!" className="food-card_title">Double Cheese Potato Burger</a>
                     <a href="#!" className="food-card_author">Burger</a>
                 </div>
                 <div className="food-card_bottom-section">
                     <div className="space-between">
                         <div>
                             <span className="text-muted">Ingredientes...</span>
                         </div>
                         <div className="pull-right">
                             <span className="badge badge-success">Veg</span>
                         </div>
                     </div>
                     <hr />
                     <div className="space-between">
                         <div className="food-card_price">
                             <span>{product.price}</span>
                         </div>
                         {/* <div className="food-card_order-count">
                         <div className="input-group  mb-3">
                             <div className="input-group-prepend">
                         
                                     <FaPlus size={25} color='orange' />
                               
                             </div>
                             <input type="text" className="form-control input-manulator mx-2" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="0" />
                             <div className="input-group-append">

                                     <FaMinus size={25} color='gray' />
                                 
                          </div>
                         </div>
                     </div> */}


                     </div>
                 </div>
             </div>
         </div>
         {/* O outlet renderiza uma rota filha definida em algum Route */}
         <Outlet />
     </div>
         
       
            
         

        </>



    )
}

export default CardFood