import { useEffect } from 'react'
import { useState } from 'react'
import { SyntheticEvent, ChangeEvent } from 'react'
import useFetch from '../../hooks/useFetch'

const RegisterUser = () => {


  const baseURL = 'http://localhost:3003/users'


  const {httpConfig} = useFetch(baseURL)

  const [user, setUser] = useState({})
  
  const [addressId, setAdressId] = useState('')


  useEffect(()=>{

   const getAddress = localStorage.getItem('address')

   setAdressId(JSON.parse(getAddress!).id)
    
  },[])


  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

      setUser({ ...user, [name]: value })

  }


  const handleSubmit =  (e: SyntheticEvent) => {

    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    try {
      httpConfig(data,'POST')

      window.flash('Cadastro realizado com sucesso!', 'success')

    } catch (error) {
      window.flash('Erro ao salvar usuário!', 'error')
    }
      

  }

  return (
    <form onSubmit={handleSubmit} className="row g-3 p-5">
      <h4 className='text-muted'>Cadastra-se abaixo para usar os nossos serviços</h4>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Nome:</label>
        <input onChange={(e) => handleUser(e)} name='name' type="text" className="form-control" id="inputAddress" placeholder="Seu nome" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Email:</label>
        <input onChange={(e) => handleUser(e)} name='email' type="email" className="form-control" id="inputAddress2" placeholder="Seu email" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">Senha:</label>
        <input onChange={(e) => handleUser(e)} name='password' type="password" className="form-control" id="inputCity" />
      </div>

        <input name="endereco_id" defaultValue={addressId} type="text" hidden />

      <div className="col-12">
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </div>
    </form>
  )
}

export default RegisterUser