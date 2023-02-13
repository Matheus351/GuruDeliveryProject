import { createContext, useContext} from "react";
// import User from '../hooks/useFetch'

const UserContext = createContext({
    token: null,
    name:null,
    setUserToken:(user:string) => {},
    removeUserToken: () => {},
});


export default UserContext;