import React from 'react'

const Pedido = () => {

  return (
    <div  className="col-sm-6 col-md-6 col-lg-4">
    <div  className="food-card">
        <div  className="food-card_content">
            <div  className="food-card_title-section">
                <a href="#!"  className="food-card_title">Pedido #4512</a>
                <a href="#!"  className="food-card_author">Burger</a>
            </div>
            <div  className="food-card_bottom-section">
                <div  className="space-between">
                    <div>
                        <span  className="text-muted">18/02/2023</span>
                    </div>
                    <div  className="pull-right">
                        <span  className="badge badge-success">Veg</span>
                    </div>
                </div>
                <hr/>
                <div  className="space-between">
                    <div  className="food-card_price">
                        Total: <span>5.99R$</span>
                    </div>
                    <div  className="food-card_order-count">
                        <div  className="input-group mb-3">
                            {/* <input onChange={(e)=>handleAmount(e.target.value)} type="text"  className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={amount}/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Pedido