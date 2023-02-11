import React, { useEffect, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styles from './CardFood.module.css'

const CardFood = () => {

  const [amount, setAmount] = useState(0)


  const handleAmount = (n:string) => {

    setAmount(Number(n))
    

  }

  useEffect(()=>{

    if(amount<0){
        setAmount(0)
    }

  },[amount])



  return (
    <div  className="col-sm-6 col-md-6 col-lg-4">
                <div  className="food-card">
                    <div  className="food-card_img">
                        <img src="https://i.imgur.com/eFWRUuR.jpg" alt=""/>
                        <a href="#!"><i  className="far fa-heart"></i></a>
                    </div>
                    <div  className="food-card_content">
                        <div  className="food-card_title-section">
                            <a href="#!"  className="food-card_title">Hambúrguer de batata com queijo duplo</a>
                            <a href="#!"  className="food-card_author">Burger</a>
                        </div>
                        <div  className="food-card_bottom-section">
                            <div  className="space-between">
                                <div>
                                    <span  className="text-muted"> Queijo, alho, cebola...</span>
                                </div>
                                <div  className="pull-right">
                                    <span  className="badge badge-success">Veg</span>
                                </div>
                            </div>
                            <hr/>
                            <div  className="space-between">
                                <div  className="food-card_price">
                                    <span>5.99R$</span>
                                </div>
                                <div  className="food-card_order-count">
                                    <div  className="input-group mb-3">
                                        <div  className="input-group-prepend">
                                            <FaMinus onClick={()=>setAmount(amount-1)}  size={25} className={styles.minus} />
                                        </div>
                                        <input onChange={(e)=>handleAmount(e.target.value)} type="text"  className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={amount}/>
                                        <div  className="input-group-append">
                                            <FaPlus onClick={()=>setAmount(amount+1)} size={25} className={styles.plus}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default CardFood