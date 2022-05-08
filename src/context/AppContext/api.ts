import { resolvePlugin } from "@babel/core";
import endpoints from "../../utils/endpoints";
import { User } from "./types";

export default {
    getUser: async (token:string): Promise<{ success: boolean; payload?:User; catch?: boolean; error?: object }> =>
        fetch(endpoints.me, {
            method: 'get', 
            headers: {
                ContentType:"application/json",
                Accept:"application/json",
                Authorization:`Bearer ${token}`
            }
        }).then((res) => res.json()).catch(()=> ({payload: false}))
}  