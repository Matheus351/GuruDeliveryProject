import { useEffect } from 'react'
import { useState } from 'react'
import { SyntheticEvent, ChangeEvent } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../../context/AuthUserContext'
import { AuthContext } from '../../context/AuthContext'
import { SignupProps } from '../../context/AuthContext'
const RegisterUser = () => {




  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [endereco, setEndereco] = useState('')
  // const [telefone, setTelefone] = useState('')

  
  const [addressId, setAdressId] = useState('')

  const {signUp} = useContext(AuthContext)


  useEffect(()=>{

   const getAddress = localStorage.getItem('address')

   setAdressId(JSON.parse(getAddress!).id)
    
  },[])


  const handleSignUp = async (e:SyntheticEvent) => {

    e.preventDefault()

     let data = {
        name,
        email,
        password,
        endereco_id:addressId
     }


     await signUp(data)

     navigate('/login')

  }



  return (
    <form onSubmit={handleSignUp} className="row g-3 p-5">
      <h4 className='text-muted'>Cadastra-se abaixo para usar os nossos serviços</h4>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">Nome:</label>
        <input onChange={(e) => setName(e.target.value)} name='name' type="text" className="form-control" id="inputAddress" placeholder="Seu nome" />
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">Email:</label>
        <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="form-control" id="inputAddress2" placeholder="Seu email" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword" className="form-label">Senha:</label>
        <input onChange={(e) => setPassword(e.target.value)} name='password' type="password" className="form-control" id="inputPassword" />
      </div>


        <input name="endereco_id" defaultValue={addressId} type="text" hidden />

      <div className="col-12">
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </div>
    </form>
  )
}

export default RegisterUser