import { createContext, ReactNode, useState, useEffect } from "react";
import { destroyCookie, setCookie, parseCookies} from 'nookies'
import { NavigateFunction, useNavigate } from "react-router-dom";
import { api } from "../pages/api/apiClient";


type AuthContextData = {
    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignProps) => Promise<void>,
    signOut:()=> void,
    signUp:(credentials:SignupProps) => Promise<void>
}


type UserProps = {
    id: string,
    name: string,
    email: string
}


type SignProps = {
    email: string,
    password: string
}

export type SignupProps = {
    name:string,
    email:string
    password:string,
    endereco_id:string
}


export const AuthContext = createContext({} as AuthContextData)


type AuthProviderProps = {
    children: ReactNode
}



export function signOut(){
    try {
        destroyCookie(undefined,'@app.token')
    } catch (error) {
        console.log(error)
    }
}


export function AuthProvider({ children }: AuthProviderProps) {

  

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    
    useEffect(()=>{
        const {'@app.token':token} = parseCookies()
        if(token){
            api.get('/user')
            .then(response=>{
                const {id, name, email} = response.data

                setUser({
                    id,
                    name,
                    email
                })
            })
            .catch(e=>signOut())
        }
    },[])

    async function signIn({email, password}:SignProps){
        try {
           const response = await api.post('/login',{
            email,
            password
           }) 


          const {id, name, token} = response.data

           setCookie(undefined,'@app.token', token,{
            maxAge:60*60*24*30,
            path:"*"
           })


           setUser({
             id,
             name,
             email
           })

           api.defaults.headers['Authorization'] = `Bearer ${token}`
          

          // console.log(response.data)
        } catch (error) {
            console.log('erro ao logar')
        }
    }


    async function signUp({name, email, password, endereco_id}:SignupProps){

        try {
            const response = await api.post('/users',{
                name,
                email,
                password,
                endereco_id
            })


        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )

}