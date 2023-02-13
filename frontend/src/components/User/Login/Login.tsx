import React, { useState, useContext, SyntheticEvent, ChangeEvent, useEffect } from "react";
// import { useHistory } from 'react-router-dom'
import StoreContext from "../../Store/Context";
import logoImg from "../../../../public/logo.png"
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import UserContext from "../../../context/AuthUserContext";


import './Login.css';

const UserLogin = () => {

    const userContext = useContext(UserContext)
   

    const baseURL = 'http://localhost:3003/login'


    const [user, setUser] = useState({})
    const {data:userLogged, httpConfig} = useFetch(baseURL)



    useEffect(()=>{

        if(userLogged){
            localStorage.setItem('user', JSON.stringify(userLogged))
            userContext.setUserToken(userLogged.token)
        }

       
    },[userLogged])



    const handleUser = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setUser({ ...user, [name]: value })

    }

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)

        const data = Object.fromEntries(formData)

        
        try {

            httpConfig(data, 'POST')
            
            
               window.flash('Login realizado!', 'sucess')
            

           
        } catch (error) {
            window.flash('Erro ao logar usuário!', 'error')
        }

    }


    return (
        <div className="container">
            <header className="header">
                <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXhhei5qcGc.jpg?s=gayymr-MoZkhATCpk4H6JF11q8zWqNV8pVstYoefMiE" alt="GuruBurger" className="logoImg" />
                <span>Use suas credenciais para realizar o login</span>
            </header>

            <form onSubmit={handleSubmit}>

                <div className="inputContainer">
                    <label htmlFor="e-mail">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        onChange={e => handleUser(e)}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="e-mail">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        onChange={e => handleUser(e)}
                    />
                </div>

                {/* <a href="#">Esqueceu sua senha?</a> */}

                <button className="button" type="submit">
                    Entrar
                </button>

                <div className="footer">
                    <p>você não tem uma conta?</p>
                    <Link to="/register">Crie a sua aqui</Link>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;