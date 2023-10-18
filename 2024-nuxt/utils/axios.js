import axios from 'axios';

//client axios global
export const client = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_URL,
});