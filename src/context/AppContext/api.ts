import { resolvePlugin } from "@babel/core";
import { Product } from "../../@types/types";
import endpoints from "../../utils/endpoints";
import { token } from "../../utils/environment";
import { User } from "./types";

const headers ={
    ContentType:"application/json",
    Accept:"application/json",
    Authorization:`Bearer ${token}`
}

export default {
    getUser:  (): Promise<{ success: boolean; payload?:User; catch?: boolean; error?: object }> =>
        fetch(endpoints.me, {
            method: 'get', 
            headers
        }).then((res) => res.json()).catch(()=> ({payload: false}))
    ,
    getProducts: ():Promise<{ success: boolean; payload?:Product[]; catch?: boolean; error?: object }>=>
        fetch(endpoints.products, {
            method: 'get', 
            headers
        }).then((res) => res.json()).catch(()=> ({payload: false}))
        
}  