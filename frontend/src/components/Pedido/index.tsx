import React, { useContext, useEffect, useState } from 'react'
import { setupAPIClient } from '../../pages/api/api'
import { AuthContext } from '../../context/AuthContext'

const Pedido = () => {

    const { user } = useContext(AuthContext)

    const [pedidos, setPedidos] = useState(null)
    const apiClient = setupAPIClient()

    // const [loading, setLoading] = useState(false)

    useEffect(() => {




        // setLoading(true)


        const getPedidos = async () => {

            const resp = await apiClient.get(`/carrinho/all/${user.id}`)

            console.log('data', resp.data)

            setPedidos(resp.data)

            //setLoading(false)
        }

        getPedidos()


    }, [])


    //  console.log(pedidos)


    return (


        // <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
        <div>

            {pedidos && pedidos.map(pedido => (



                <div key={pedido.id} className="col-sm-6 col-md-6 col-lg-4">

                    <div className="food-card">



                        <div  className="food-card_content">
                            <div className="food-card_title-section">
                                <a href="#!" className="food-card_title">Pedido #{pedido.id}</a>
                                <a href="#!" className="food-card_author">Burger</a>
                            </div>
                            <div className="food-card_bottom-section">
                                <div className="space-between">
                                    <div>
                                        <span className="text-muted">{pedido.data.slice(0, 10)}</span>
                                    </div>
                                    <div className="pull-right">
                                        <span className="badge badge-success">Veg</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="space-between">
                                    <div className="food-card_price">
                                        Total: <span>{pedido.total}R$</span>
                                    </div>
                                    <div className="food-card_order-count">
                                        <div className="input-group mb-3">
                                            {/* <input onChange={(e)=>handleAmount(e.target.value)} type="text"  className="form-control input-manulator" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value={amount}/> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            ))}

        </div>



    )
}

export default Pedido