import { createContext, useContext} from "react";
// import User from '../hooks/useFetch'

const AppContext = createContext({
    products:[],
    amount:null,
    handleAmount:(n:string) => null
})


export default AppContext;