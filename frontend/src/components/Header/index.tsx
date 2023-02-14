import './index.css'
import { useContext } from 'react'
import UserContext from '../../context/AuthUserContext'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BsCartDashFill } from 'react-icons/bs'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Header() {

    const userr = useContext(UserContext)
    const navigate = useNavigate()
   
    const {user, isAuthenticated, signOut } = useContext(AuthContext)


    return (

        <header className='cabecalho'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pedidos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className='dropdown-item' to={'/pedidos'}>Histórico</Link>
                                    <Link className='dropdown-item' to={'/comprar'}>Novo</Link>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produtos e Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className='dropdown-item' to={'/produto/register'}>Cadastrar Produto</Link>
                                    <Link className='dropdown-item' to={'/categoria/register'}>Cadastrar Categoria</Link>
                                    {/* <Link className='dropdown-item' to={'/produtos'}>Ver todos</Link> */}
                                  
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Restaurante
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                                    <li><a className="dropdown-item" href="#">Ver todos</a></li>
                                </ul>
                            </li>
                        </ul>

                        {/* {user &&  <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{user.name}</a>
                            </li> } */}

                        {!isAuthenticated &&
                            <>
                                <Link className='btn btn-primary' to='/register'>Cadastrar</Link>
                                <Link className='btn btn-primary' to='/login'>Fazer Login</Link>
                            </>

                        }

                        {isAuthenticated &&

                            <>
                                <Link to={'/carrinho'}>
                                    Seu carrinho:<BsCartDashFill className='m-2' size={25} color='orange' />
                                </Link>

                                <button style={{ border: '1px solid grey', backgroundColor: '#fff' }} onClick={()=>signOut()}>
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