export interface Context {
    state:{
        user: User | undefined
    };

    actions:{
        onGetUser: () => Promise<void>
    }
}

export interface User{
    id: string;
    name: string;
    points: number;
    redeemHistory: string[]
    createDate: Date
  }