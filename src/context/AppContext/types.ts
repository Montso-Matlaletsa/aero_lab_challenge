import { Category, Product } from "../../@types/types";

export interface Context {
    state:{
        user: User | undefined,
        products: Product[],
        categories: Category[]
    };

    actions:{
        onGetUser: () => Promise<void>,
        onGetProducts: () => Promise<void>,
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