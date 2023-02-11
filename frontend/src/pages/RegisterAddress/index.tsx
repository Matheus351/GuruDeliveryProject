import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'

const RegisterAddress = () => {

    const [address, setAdress] = useState({})

    const navigate = useNavigate()

    const baseURL = 'http://localhost:3003/enderecos'

    const { data: addressData, httpConfig } = useFetch(baseURL)


    useEffect(() => {

        if (Object.keys(addressData).length > 0) {
            localStorage.setItem('address', JSON.stringify(addressData))
            navigate('/register/user')
            return
        }


    }, [addressData])


    const handleAdress = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setAdress({ ...address, [name]: value })


    }

    const handleSubmit = (e: SyntheticEvent) => {

        e.preventDefault()
        //console.log(e) 

        const formData = new FormData(e.target as HTMLFormElement)

        const data = Object.fromEntries(formData)

        try {

            httpConfig(data, 'POST')
            window.flash('Endereço cadastrado com sucesso!', 'success')

        } catch (error) {
            window.flash('Erro ao cadastrar endereço!', 'error')
        }


    }








    return (
        <form onSubmit={handleSubmit} className="row g-3 p-5">

            <h4 className='text-muted'>Por favor, informe primeiro seu endereço antes de prosseguir com o cadastro</h4>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Cidade:</label>
                <input onChange={(e) => handleAdress(e)} name='cidade' type="text" className="form-control" id="inputAddress" placeholder="Nome da cidade" required />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Rua:</label>
                <input onChange={(e) => handleAdress(e)} name='rua' type="text" className="form-control" id="inputAddress2" placeholder="Nome da rua" required />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Bairro:</label>
                <input onChange={(e) => handleAdress(e)} name='bairro' type="text" className="form-control" id="inputCity" placeholder='Nome do bairro' required />
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Número da sua moradia:</label>
                <input onChange={(e) => handleAdress(e)} name='numero' type="text" className="form-control" id="inputZip" required />
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success">Cadastrar</button>
            </div>
        </form>
    )
}

export default RegisterAddress