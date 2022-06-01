
export type RootNavigation = {
    Home: undefined;
    Products: undefined;
}

export type Product={
    _id: string;
    name: string;
    category: string;
    cost:number
    img: {url: string, hdUrl: string}
}

export type Category={
  name: string
}

export const mockProducts:Product[]=
[
    {
      _id: "5a033eeb364bf301523e9b92",
      name: "Sandalia Pale Gold YSL",
      cost: 200,
      category: "Indumentaria",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
      }
    },
    {
      _id: "5a033f0f364bf301523e9b93",
      name: "iPhone 7 Case Sea-Blue",
      cost: 200,
      category: "Accesorios",
      img: {
        url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
        hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
      }
    }
  ]