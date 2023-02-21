
import React, { useEffect, useState, useContext } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Home from '../Home';
import { AuthContext } from '../../context/AuthContext';
import AppContext from '../../context/AppContext';
// import './Modal.css'
import { useParams, useNavigate } from 'react-router-dom';
import { setupAPIClient } from '../api/api';

type Product = {
    id:string;
    name:string;
    image:string;
    description:string;
    categoria_id:string;
    empresa_cnpj:string;
}
const ModalPage = () => {

    const { id } = useParams()


    const apiClient = setupAPIClient()
    const [product, setProduct] = useState<Product>()
    const navigate = useNavigate()

    const [cartItems, setCartItems] = useState([])
    // const [amount, setAmount] = useState(0)

    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);

    const [amount, setAmount] = useState(0);

    const handleAddAmount = () => {
        console.log(amount)
        setAmount(amount+1);
    }

    const handleRemoveAmount = () => {
        setAmount(amount-1);
    }

    useEffect(() => {

        if (cartItems) {
            const newTotal = cartItems.reduce((acc, itens) => acc + parseFloat(itens.price) * itens.amount, 0);
            setTotal(newTotal);
        }


    }, [cartItems]);


    useEffect(() => {


        localStorage.setItem('carrinho', JSON.stringify(cartItems))

    }, [cartItems])


    const { products } = useContext(AppContext);
   // const app = useContext(AuthContext)



    const setProductSelected = (product) => {

        if (products) {

            const exist = cartItems.find(item => item.id === product.id)

            if (exist) {
                setCartItems(cartItems
                    .map(item =>
                        item.id === product.id ? { ...exist, amount: exist.amount + 1 } : item))

            }
            else {
                setCartItems([...cartItems, { ...product, amount: 1 }])
            }
        }
    }


    const removeProductSelected = (product) => {

        const exist = cartItems.find(item => item.id === product.id)

        if (exist.amount === 1) {
            setCartItems(cartItems.filter(item => item.id !== product.id))
        } else {
            setCartItems(cartItems
                .map(item =>
                    item.id === product.id ? { ...exist, amount: exist.amount - 1 } : item))

        }

    }




    useEffect(() => {

        const get = async () => {

            const resp = await apiClient.get(`/produtos/${id}`)

            const data = resp.data

            setProduct(data)

            setOpen(true)

        }

        get()

    }, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        // Retorna para a rota anterior
        navigate(-1)
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'all ease 0.5s',
        width: '80%',
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 0,
    };
   console.log(product)

    return (

          <div>
            {product && 
            
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >


            <Box sx={style}>

                <div  className="container-fluid">

                    <div style={{ minHeight: 400 }} className="row">

                        <div className="col p-0 align-self-center">



                            <img

                                style={{ objectFit: 'cover', height: '400px' }}
                                width={'100%'} className='image-fluid' src={product.image} alt="" />

                        </div>


                        <div className="col">
                            <div className="d-flex justify-content-between">
                                <h4>Coca-lata 300ml</h4>
                                
                                <div style={{ cursor: 'pointer' }} onClick={handleClose}>&#x274C;</div>
                            </div>

                            <div>
                                <p>Coca-Cola lata de 300ml
                                </p>
                                <p>R$ 9.50</p>
                            </div>

                            <div className='text-primary p-2'>Bebida Gelada</div>

                            <div className='border p-2'>

                                <div>
                                    {product.empresa_cnpj}
                                </div>

                                <div className='text-secondary'>
                                    30-45min
                                </div>

                            </div>

                            <p className='mb-0'>Algum comentário?</p>
                            <div className="form-floating">

                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                                <label className='text-muted' htmlFor="floatingTextarea2">Ex: Tirar cebola, maionese...</label>
                            </div>


                            <div className='d-flex align-items-center justify-content-end mt-1'>

                                <div className='d-flex border me-2'>
                                    <div onClick={()=>handleRemoveAmount()} className="p-2">
                                        <FaMinus onClick={() => removeProductSelected(product)} color='gray' cursor={'pointer'} size={25} />
                                    </div>
                                    <div  className='p-2'>
                                        {amount}
                                    </div>

                                    <div onClick={()=>handleAddAmount()} className="p-2">
                                        <FaPlus onClick={() => setProductSelected(product)} color='orange' cursor={'pointer'} size={25} />
                                    </div>
                                </div>

                                <div className="">
                                    <button className='btn btn-primary'>Adicionar ao Carrinho</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </Box>
        </Modal>
            }
          </div>
        
           

    )
}

export default ModalPage