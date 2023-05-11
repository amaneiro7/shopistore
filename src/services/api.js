import { apiURL } from "./config";

export const getProductsList = async ({endpoint}) => {
    if (endpoint === '') return null
    try {
        const response = await fetch(`${apiURL}${endpoint}`)
        const json = await response.json()
        return json
        
    } catch (error) {
        throw new Error('Error fetching products', error)
    }
}