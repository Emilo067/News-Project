import axios from "axios";
import {BaseResponseType} from "../common/types/types";

const BASE_URL = 'https://api.currentsapi.services/v1/'
const API_KEY = 'zcOqJhQUI9tjrL-Zj0V_D6RpK48USnvVUyD9Oil91LufO8v3'

export const getNews = async (page_number = 1, page_size = 10) => {
    try {
        const res = await axios.get<BaseResponseType>(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size
            }
        })
        return res.data
    } catch (err) {
        console.log(err)
    }
}