import { useState, SyntheticEvent, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

import { useContext } from 'react'
import { setupAPIClient } from '../api/api'

const RegisterCategory = () => {

   const [name, setName] = useState('')

    async function handleRegister(e:SyntheticEvent){
        e.preventDefault()

        const apiClient = setupAPIClient()
        await apiClient.post('/categorias',{
            name:name
        })


        window.flash('Categoria cadastrada!', 'success')

        setName('')
    }



    return (
        <form onSubmit={handleRegister} className="row g-3 p-5">
            <h4 className='text-muted'>Cadastre uma categoria</h4>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Nome:</label>
                <input onChange={(e) => setName(e.target.value)} name='name' type="text" className="form-control" id="inputAddress" placeholder="Nome da categoria" />
            </div>
    

            <div className="col-12">
                <button type="submit" className="btn btn-success">Cadastrar</button>
            </div>
        </form>
    )
}

export default RegisterCategory