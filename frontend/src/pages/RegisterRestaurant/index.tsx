

import { SyntheticEvent, useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { setupAPIClient } from '../api/api'
import {MdRestaurant} from 'react-icons/md'

export const Restaurante = () => {

  const { user } = useContext(AuthContext)


  const [nome, setNome] = useState('')
  const [cnpj, setCnpj] = useState('')



  const handleSubmit = async (e: SyntheticEvent) => {

    e.preventDefault()

    const apiClient = setupAPIClient()

    const data = {
      user_id:user.id,
      cnpj,
      nome
    }


    await apiClient.post('/empresa',data)

    window.flash('Cadastro realizado com sucesso!', 'success')

    


  }


  return (
    <div>

      <form onSubmit={handleSubmit} className="row g-3 p-5 mt-2">
        <h4 className='text-muted'>Cadastre seu restaurante {<MdRestaurant size={25}/>}</h4>
        <div className="col-4">
          <label htmlFor="inputAddress" className="form-label">Nome:</label>
          <input onChange={(e) => setNome(e.target.value)} name='nome' type="text" className="form-control" id="inputAddress" placeholder="" />
        </div>
        <div className="col-4">
          <label htmlFor="inputAddress2" className="form-label">CNPJ:</label>
          <input onChange={(e) => setCnpj(e.target.value)} name='cnpj' type="text" className="form-control" id="inputAddress2" placeholder="" />
        </div>
        <div className="col-4">
          <label htmlFor="inputAddress2" className="form-label">Tipo de comida:</label>
          <input onChange={(e) => setCnpj(e.target.value)} name='tipo_comida' type="text" className="form-control" id="inputAddress2" placeholder="" />
        </div>
        <div className="col-4">
          <label htmlFor="inputAddress2" className="form-label">Logo:</label>
          <input onChange={(e) => setCnpj(e.target.value)} name='logo' type="text" className="form-control" id="inputAddress2" placeholder="" />
        </div>
        <input value="" type="text" hidden />
        <div className="row mt-2">

          <div className="col-2">
          <button type="submit" className="btn btn-success">Cadastrar</button>
          </div>
       
        </div>
      </form>

    </div>
  )
}




