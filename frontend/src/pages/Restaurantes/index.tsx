import React ,{useEffect, useContext, useState}  from 'react'
import { setupAPIClient } from '../api/api'
import { AuthContext } from '../../context/AuthContext'

const Restaurantes = () => {

  const {user} = useContext(AuthContext)

  const [restaurantes, setRestaurantes] = useState(null)

  const apiClient = setupAPIClient()
  useEffect(()=>{

   

    console.log(user.id)


    const get = async () => {

     const resp =  await apiClient.get(`/empresas/${user.id}`)

      setRestaurantes(resp.data)

    }


    get()


  },[])

  console.log('restaurantes',restaurantes)


  return (
           
    <div className="col-sm-6 col-md-6 col-lg-4 p-3">

    {restaurantes && restaurantes.map(restaurante => (

        <div key={restaurante.id}  className="food-card">



            <div className="food-card_content">
                <div className="food-card_title-section">
                    <a href="#!" className="food-card_title"><span className='text-muted'>Nome:</span>{restaurante.nome}</a>
                    {/* <a href="#!" className="food-card_author">Burger</a> */}
                </div>
                <div className="food-card_bottom-section">
                    <div className="space-between">
                        <div>
                            <span><span className='text-muted'>CNPJ:</span>{restaurante.cnpj}</span>
                        </div>
                        <div className="pull-right">
                            <span className="badge badge-success">Veg</span>
                        </div>
                    </div>
                    <hr />
                    <div className="space-between">
                        <div className="food-card_price">
                           
                        </div>
                        <div className="food-card_order-count">
                            <div className="input-group mb-3">
                             <span className='text-muted'>Proprietário:</span> {restaurante.user.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    ))}
</div>
  )
}

export default Restaurantes