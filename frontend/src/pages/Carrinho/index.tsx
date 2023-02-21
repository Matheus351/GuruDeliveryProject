import { useEffect, useState, useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { AuthContext } from '../../context/AuthContext'
import { setupAPIClient } from '../api/api'

import './index.css'

type Item = {
    id: string,
    image: string
    amount: number,
    description: string,
    price: string,
    name: string,
    categoria_id: string
}

type Carrinho = {
    listItems: Item[]
}



const Carrinho = () => {

    const { user } = useContext(AuthContext)

    const [cartItems, setCartItems] = useState<Carrinho>()

    const [carrinhoId, setCarrinhoId] = useState('')

    const [loading, setLoading] = useState(false)

    const [total, setTotal] = useState(0)

    const [cartClosed, setCartClosed] = useState(false)


    useEffect(() => {

        const items = JSON.parse(localStorage.getItem('carrinho'))

        setCartItems({ listItems: items })

    }, [])



    useEffect(() => {

        if (cartItems) {
            const newTotal = cartItems.listItems.reduce((acc, itens) => acc + parseFloat(itens.price) * itens.amount, 0);
            setTotal(newTotal);
        }


    }, [cartItems]);



    const handleAddToCart = (itenIndex) => {
        const newItens = [...cartItems.listItems];
        newItens[itenIndex].amount++;
        setCartItems({ listItems: newItens });
    }

    const handleRemoveFromCart = (itenIndex) => {
        const newItens = [...cartItems.listItems];
        newItens[itenIndex].amount--;
        setCartItems({ listItems: newItens });
    }



    const handleCloseCart = async () => {

        const apiClient = setupAPIClient()

        setLoading(true)

        const data = {
            user_id: user.id,
            total: total.toString(),
        }


        await apiClient.post('/carrinho', data)
            .then(response => {
                const { id } = response.data
                setCarrinhoId(id)
            })
        setCartClosed(true)
        setLoading(false)

        window.flash('Carrinho fechado!', 'success')

    }



    const handleBuy = async () => {

        const apiClient = setupAPIClient()

        setLoading(true)

        const promises = cartItems
            .listItems.map(async item => await apiClient.post('carrinho/add',
                {
                    carrinho_id: carrinhoId,
                    quantidade: item.amount,
                    produto_id: item.id
                }))

        await Promise.all(promises)

        setLoading(false)

        window.flash('Seu pedido foi registrado!', 'success')


    }


    return (


        <section className="h-100 h-custom pt-2">

            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">

                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Carrinho</h1>
                                                {/* <h6 className="mb-0 text-muted">{} items</h6> */}
                                            </div>
                                            <hr className="my-4" />

                                            <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                {cartItems && cartItems.listItems.map((item, index) => (


                                                    <>

                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src={item.image}
                                                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <h6 className="text-muted">{item.description}</h6>
                                                            <h6 className="text-black mb-0">{item.name}</h6>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                            <button onClick={() => handleRemoveFromCart(index)} className="btn btn-link px-2"
                                                            >
                                                                {/* <i className="fas fa-minus"></i> */}
                                                                <FaMinus color='gray' />
                                                            </button>

                                                            <div id="form1" 
                                                                className="form-control">
                                                                    {item.amount}
                                                                </div>

                                                            <button onClick={() => handleAddToCart(index)} className="btn btn-link px-2"
                                                            >
                                                                {/* <i className="fas fa-plus"></i> */}
                                                                <FaPlus color='orange' />
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h6 className="mb-0">R$ {parseFloat(item.price) * item.amount}</h6>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                                        </div>

                                                    </>


                                                ))}
                                            </div>



                                            <hr className="my-4" />

                                            <div className="pt-5">
                                                <h6 className="mb-0"><a href="#!" className="text-body"><i
                                                    className="fas fa-long-arrow-alt-left me-2"></i>Voltar</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">

                                        {cartItems &&


                                            <div className="p-5">
                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Resumo</h3>
                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-4">
                                                    <h5 className="text-uppercase">items {cartItems.listItems.length}</h5>
                                                    {/* <h5>R$ 132.00</h5> */}
                                                </div>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between mb-5">
                                                    <h5 className="text-uppercase">Total:</h5>
                                                    <h5>R$ {total}</h5>
                                                </div>

                                        
                                                {loading ?
                                                    <button onClick={handleCloseCart} type="button" className="text-success btn btn-dark btn-block btn-lg">

                                                        <div className="d-flex align-items-center">
                                                            <strong className='text-light'>Loading...</strong>
                                                            <div className="spinner-border ms-auto text-light" role="status" aria-hidden="true"></div>
                                                        </div>
                                                        {/* <FaSpinner className='spinner-border' style={{width:100}}/> */}


                                                    </button>
                                                    :

                                                    <button onClick={handleCloseCart} type="button" className="btn btn-dark btn-block btn-lg">
                                                        Fechar Carrinho</button>
                                                }

                                                {cartClosed?     <button onClick={handleBuy} type="button" className="btn btn-primary btn-block btn-lg"
                                                    data-mdb-ripple-color="dark">Comprar</button> : 
                                                    
                                                    <button onClick={handleBuy} type="button" className="btn btn-secondary btn-block btn-lg"
                                                    data-mdb-ripple-color="dark" disabled>Comprar</button>
                                                    }
                                            

                                            </div>



                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carrinho