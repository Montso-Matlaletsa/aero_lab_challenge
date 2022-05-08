import { Product } from "../../@types/types";

export interface Context {
    state:{
        user: User | undefined,
        products: Product[]
    };

    actions:{
        onGetUser: () => Promise<void>,
        onGetProducts: () => Promise<void>
    }
}

export interface User{
    id: string;
    name: string;
    points: number;
    redeemHistory: string[]
    createDate: Date
}