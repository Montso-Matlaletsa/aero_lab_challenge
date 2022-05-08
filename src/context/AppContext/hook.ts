import { useContext } from 'react'
import {AppContext } from './context'

const useApp = ()=>{
    const { state:{
        user, 
        products
    }, actions:{onGetUser, onGetProducts} } = useContext(AppContext)

    return{
        user, 
        products,
        onGetUser,
        onGetProducts
    }
}

export default useApp