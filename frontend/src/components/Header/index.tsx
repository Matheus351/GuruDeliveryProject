import './index.css'
import { useContext } from 'react'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BsCartDashFill } from 'react-icons/bs'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

function Header() {

    const navigate = useNavigate()

    const { user, isAuthenticated, signOut } = useContext(AuthContext)

    const makeLogout = () => {
        signOut()
        window.location.reload()
    }


    return (

        <header className='cabecalho'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <Link className='navbar-brand' to={'/'}>
                        <img src="logo.png" alt="" />
                    </Link>
                


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-dark">Início</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/restaurantes'} className="nav-link text-dark">Serviços</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link text-dark">Contato</Link>
                            </li>
                        </ul>



                        {!isAuthenticated &&
                            <>
                                {/* <Link className='btn btn-primary' to='/register'>Cadastrar</Link> */}
                                <Link to={'/carrinho'}>
                                    Seu carrinho:<BsCartDashFill className='m-2' size={25} color='orange' />
                                </Link>
                                <Link className='btn btn-primary' to='/login'>Fazer Login</Link>
                            </>

                        }

                        {isAuthenticated &&

                            <>
                               
                                <div className='d-flex flex-row align-items-center'>
                                    <p className='m-0'>Olá, {user.name}</p>
                                    <AiOutlineUser size={20} color='orange'/>
                                   
                                </div>


                                <button style={{ border: '1px solid grey', backgroundColor: '#fff' }} onClick={() => makeLogout()}>
                                    Sair <BiLogOut color='red' size={25} ></BiLogOut>
                                </button>
                            </>


                        }

                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Header