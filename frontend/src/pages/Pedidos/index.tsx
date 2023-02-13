import React from 'react'
import Pedido from '../../components/Pedido'

function Pedidos() {
  return (
    <section className="main-content pt-0">
            <div className="container">
                <h1 className="text-center text-uppercase">Pedidos</h1>
                <br />
                <br />
                <div className="row">
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                    <Pedido />
                </div>

            </div>
        </section>
  )
}

export default Pedidos