import { apiUrl } from "./environment";

const endpoints = {
    me : `${apiUrl}/user/me`,
    points: `${apiUrl}/user/points`,
    history: `${apiUrl}/user/history`,
    redeem: `${apiUrl}/redeem`,
    products: `${apiUrl}/products`,
}

export default endpoints