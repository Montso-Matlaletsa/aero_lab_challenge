import { Product } from "../../@types/types";

export interface Context {
    state:{
        user: User | undefined,
        products: Product[],
        categories: string[]
    };

    actions:{
        onGetUser: () => void,
        onGetProducts: () => void,
        onGetCategories: () => void
    }
}

export interface User{
    id: string;
    name: string;
    points: number;
    redeemHistory: string[]
    createDate: Date
}