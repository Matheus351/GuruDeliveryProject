import React, { useContext, useEffect, useState } from 'react'
// import Pedido from '../../components/Pedido'
import { AuthContext } from '../../context/AuthContext'
import { setupAPIClient } from '../api/api'
function Pedidos() {

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


  return (
    <section className="main-content pt-0">
      <div className="container">
        <h1 className="text-center">Histórico de Pedidos</h1>
        <br />
        <br />
        <div className="row">
          {/* <Pedido /> */}
          {pedidos && pedidos.map(pedido => (



            <div key={pedido.id} className="col-sm-6 col-md-6 col-lg-4">

              <div className="food-card">



                <div className="food-card_content">
                  <div className="food-card_title-section">
                    <a href="#!" className="food-card_title">Pedido #{pedido.id}</a>
    
                  </div>
                  <div className="food-card_bottom-section">
                    <div className="space-between">
                      <div>
                        <span className="text-muted">{pedido.data.slice(0, 10)}</span>
                      </div>
                      <div className="pull-right">
                    
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

      </div>
    </section>
  )
}

export default Pedidos