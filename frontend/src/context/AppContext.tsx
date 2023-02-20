import { createContext, useContext} from "react";
// import User from '../hooks/useFetch'

const AppContext = createContext({
    products:[],
})


export default AppContext;