import { resolvePlugin } from "@babel/core";
import { Product } from "../../@types/types";
import endpoints from "../../utils/endpoints";
import { User } from "./types";

const header ={
    
}

export default {
    getUser:  (token:string): Promise<{ success: boolean; payload?:User; catch?: boolean; error?: object }> =>
        fetch(endpoints.me, {
            method: 'get', 
            headers: {
                ContentType:"application/json",
                Accept:"application/json",
                Authorization:`Bearer ${token}`
            }
        }).then((res) => res.json()).catch(()=> ({payload: false}))
    ,
    getProducts: (token:string):Promise<{ success: boolean; payload?:Product[]; catch?: boolean; error?: object }>=>
        fetch(endpoints.products, {
            method: 'get', 
            headers: {
                ContentType:"application/json",
                Accept:"application/json",
                Authorization:`Bearer ${token}`
            }
        }).then((res) => res.json()).catch(()=> ({payload: false}))
        
}  