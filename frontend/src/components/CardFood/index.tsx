import React, { useEffect, useState, useContext } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './CardFood.css'
import AppContext from '../../context/AppContext'

const CardFood = ({ product, setProductSelected, removeProductSelected}) => {

    const [amount, setAmount] = useState(1)

    return (
        <div className="col-sm-6 col-md-6 col-lg-4">
            {product &&

                <div className="food-card">
                    <div className="food-card_img">
                        <img src={product.image} alt="" />
                        {/* <img src="https://i.imgur.com/eFWRUuR.jpg" alt="" /> */}
                        <a href="#!"><i className="far fa-heart"></i></a>
                    </div>
                    <div className="food-card_content">
                        <div className="food-card_title-section">
                            <a href="#!" className="food-card_title">{product.name}</a>
                            <a href="#!" className="food-card_author">Burger</a>
                        </div>
                        <div className="food-card_bottom-section">
                            <div className="space-between">
                                <div>
                                    <span className="text-muted">{product.description}</span>
                                </div>
                                <div className="pull-right">
                                    <span className="badge badge-success">Veg</span>
                                </div>
                            </div>
                            <hr />
                            <div className="space-between">
                                <div className="food-card_price">
                                    <span>R$ {product.price * amount}</span>
                                </div>
                                <div className="food-card_order-count">
                                    <div className="input-group mb-3">
                                        <div onClick={()=>setAmount(amount-1)} className="input-group-prepend">
                                            <FaMinus color='gray' onClick={() => removeProductSelected(product)} size={25} className='minus' />
                                        </div>
                                        <input readOnly type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={amount} />
                                        <div onClick={()=>setAmount(amount+1)} className="input-group-append">
                                            <FaPlus color='orange' onClick={() => setProductSelected(product)} size={25} className='plus' />
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>


            }

        </div>
    )
}

export default CardFood