import { useContext } from 'react'
import {AppContext } from './context'

const useApp = ()=>{
    const { state:{
        user
    }, actions:{onGetUser} } = useContext(AppContext)

    return{
        user, 
        onGetUser
    }
}

export default useApp