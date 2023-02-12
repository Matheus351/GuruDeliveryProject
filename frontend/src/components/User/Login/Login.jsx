import React, { useState, useContext} from "react";
import { useHistory } from 'react-router-dom'
import StoreContext from "../../Store/Context";
import logoImg from "../../../../public/logo.png"
import { Link } from "react-router-dom";


import './Login.css';

function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }) {
    if (user === 'admin' && password === 'admin') {
        return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState;
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    function onSubmit(event) {
        event.preventDefault();

        const { token, error } = login(values);

        if (token) {
            setToken(token);
            return history.push('/');
        }

        setError(error);
        setValues(initialState);
    }

    return (
        <div className="container">
            <header className="header">
                <img src="{logoImg}" alt="GuruBurger" className="logoImg" />
                <span>Use suas credenciais para realizar o login</span>
            </header>

            <form onSubmit={onSubmit}>
                <div className="inputContainer">
                    <label htmlFor="e-mail">E-mail</label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        onChange={onChange}
                        value={values.user}
                        />
                </div>

                <div className="inputContainer">
                    <label htmlFor="e-mail">Senha</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Digite sua senha"
                        onChange={onChange}
                        value={values.password}
                        />
                </div>

                <a href="#">Esqueceu sua senha?</a>

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