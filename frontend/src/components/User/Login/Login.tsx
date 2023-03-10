import React, { FormEvent, useState, useContext, SyntheticEvent, ChangeEvent, useEffect } from "react";
// import { useHistory } from 'react-router-dom'
import StoreContext from "../../Store/Context";
import logoImg from "../../../../public/logo.png"
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import './Login.css';

const UserLogin = () => {

    const { signIn } = useContext(AuthContext)
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleLogin(e: FormEvent) {

        e.preventDefault()

        if(email===''||password===''){
            window.flash('Erro ao logar usuário!', 'error')
            return
        }

        setLoading(true)

        const userData = {
            email:email,
            password:password
        }

        await signIn(userData).catch(e=> console.log(e))

        setLoading(false)

        navigate('/')

    }



    const baseURL = 'http://localhost:3003/login'

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const [user, setUser] = useState({})
    const { data: userLogged, httpConfig } = useFetch(baseURL)

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

            <form onSubmit={handleLogin}>

                <div className="inputContainer">
                    <label htmlFor="e-mail">E-mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Digite seu e-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="e-mail">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder="Digite sua senha"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                {/* <a href="#">Esqueceu sua senha?</a> */}

                <button className="btn btn-primary w-100" type="submit">
                    Entrar
                </button>

                <div className="footer">
                    <p>você não tem uma conta?<Link to="/register">Crie a sua aqui</Link></p> 
                </div>
            </form>
        </div>
    );
};

export default UserLogin;