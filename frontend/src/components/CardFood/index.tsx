import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './CardFood.css'

const CardFood = ({ product }) => {

    const [amount, setAmount] = useState(0)


    const handleAmount = (n: string) => {

        setAmount(Number(n))

    }

    useEffect(() => {

        if (amount < 0) {
            setAmount(0)
        }

    }, [amount])



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
                                    <span>R$ {product.price}</span>
                                </div>
                                {/* <div className="food-card_order-count">
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <FaMinus onClick={() => setAmount(amount - 1)} size={25} className='minus' />
                                        </div>
                                        <input onChange={(e) => handleAmount(e.target.value)} type="text" className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={amount} />
                                        <div className="input-group-append">
                                            <FaPlus onClick={() => setAmount(amount + 1)} size={25} className='plus' />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>


            }

        </div>
    )
}

export default CardFood