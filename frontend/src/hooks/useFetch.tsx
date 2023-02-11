import {useEffect, useState} from 'react'

const useFetch = (url:string) => {



    const [data, setData] = useState({})
    //configurar cabeçalhos
    const [config, setConfig] = useState({})
    //configurar método:post,get...
    const [method, setMethod] = useState('')

    // const [callFetch, setCallFetch] = useState({})


    const httpConfig = (data:Object,method:string) => {

        if(method==="POST"){
            setConfig({
                method,
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })

            setMethod(method)
        }
    }


    // useEffect(() => {

    //     const fetchData = async () => {

    //         const resp = await fetch(url)
    //         const json = await resp.json()

    //         setData(json)
    //     }

    //     fetchData()

    // }, [callFetch])


    
    useEffect(()=>{

        const httpRequest =  async () => {

            if(method=="POST"){

                let fetchOptions = [url, config]

               // console.log(fetchOptions)
                const res = await fetch(fetchOptions[0] as URL, fetchOptions[1])//('http...', {...})
                const json = await res.json()

               // setCallFetch(json)
              setData(json)
           
    
            }

        }


        httpRequest()
     
    },[config, method, url])


  return {data, httpConfig}
}

export default useFetch