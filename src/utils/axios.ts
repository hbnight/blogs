import axios from 'axios'
import { getCookie } from './auth';

const fetch = axios.create({
  baseURL:'',
  timeout:10000,
})

fetch.interceptors.request.use(config=>{

  return config
})


fetch.interceptors.response.use(data=>{
})