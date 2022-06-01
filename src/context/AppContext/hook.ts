import { useContext } from 'react'
import {AppContext } from './context'

const useApp = ()=>{
    const { state:{
        user, 
        products,
        categories
    }, actions:{onGetUser, onGetProducts, onGetCategories} } = useContext(AppContext)

    return{
        user, 
        products,
        categories,
        onGetUser,
        onGetProducts,
        onGetCategories
    }
}

export default useApp