import './index.css'


function Header() {


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
                                    <li><a className="dropdown-item" href="#">Histórico</a></li>
                                    <li><a className="dropdown-item" href="#">Novo</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Restaurante
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Cadastrar</a></li>
                                    <li><a className="dropdown-item" href="#">Ver todos</a></li>
                                    {/* <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Gerenciar</a></li> */}
                                </ul>
                            </li>
                        </ul> 
                        <a className="btn btn-primary" href="#" role="button">Cadastrar</a>
                        <a className="btn btn-primary" href="#" role="button">Fazer Login</a>
                    </div>
                </div>
            </nav>
        </header>


    )
}

export default Header