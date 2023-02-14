import { useState, SyntheticEvent, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { setupAPIClient } from '../api/api'

type ItemProps = {
    id: string,
    name: string
}

type CategoryProps = {
    categoryList: ItemProps[]
}

type Product = {
    name:string,
    description:string,
    image:string,
    categoria_id:string,
    price:string
}

const RegisterProduct = () => {

    const navigate = useNavigate()



    const baseURL = 'http://localhost:3003/produtos'

    // const { data: productSaved, httpConfig, loading } = useFetch(baseURL)

    const [product, setProduct] = useState<Product>()

    const [categories, setCageories] = useState([])
    const [categorySelected, setCategorySelected] = useState(0)
    const apiClient = setupAPIClient()

    useEffect(() => {

        

        const get = async () => {
            const response = await apiClient.get('/categorias/all')
            setCageories(response.data)
        }


        get()


    }, [])



    // useEffect(() => {

    //     if (productSaved === undefined) return


    //     console.log(productSaved)

    //     //navigate('/')

    //     // userContext.setUserToken(userLogged.token)

    // }, [productSaved])




    const handleProduct = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target

        setProduct({ ...product, [name]: value })

    }


    const handleCategory = (event) => {

        setCategorySelected(event.target.value)

    }




    const handleSubmit = async (e: SyntheticEvent) => {

         e.preventDefault()

         const productData = {
            name:product.name,
            price:product.price,
            description:product.description,
            image:product.image,
            categoria_id:categories[categorySelected].id
         }

         if(!productData){
            window.flash('Erro ao salvar produto!', 'error')
            return
         }

         await apiClient.post('/produtos',productData)
         window.flash('Cadastro realizado com sucesso!', 'success')

    }




    return (
        <form onSubmit={handleSubmit} className="row g-3 p-5">
            <h4 className='text-muted'>Cadastre seu produto</h4>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Nome:</label>
                <input onChange={(e) => handleProduct(e)} name='name' type="text" className="form-control" id="inputAddress" placeholder="Nome do produto" />
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Imagem:</label>
                <input onChange={(e) => handleProduct(e)} name='image' type="text" className="form-control" id="inputAddress2" placeholder="URL..." />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Descrição:</label>
                <input onChange={(e) => handleProduct(e)} name='description' type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">Preço:</label>
                <input onChange={(e) => handleProduct(e)} name='price' type="text" className="form-control" id="inputCity" />
            </div>
            <select name='categoria_id' className="form-select" aria-label="Default select example" value={categorySelected} onChange={handleCategory}>
                {categories.map((category, index)=>(
                     <option key={index} value={index}>
                        {category.name}
                    </option>
                ))}
            </select>
            {/* <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">ID da Categoria:</label>
                <input onChange={(e) => handleProduct(e)} name='categoria_id' type="text" className="form-control" id="inputCity" />
            </div> */}

            {/* <input name="categoria_id" defaultValue={addressId} type="text" hidden /> */}

            <div className="col-12">
                <button type="submit" className="btn btn-success">Cadastrar</button>
            </div>
        </form>
    )
}

export default RegisterProduct