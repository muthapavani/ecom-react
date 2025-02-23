import axios from "axios"
import { getusersurl } from "./contents"
export const getusersdata=async()=>{
    const response= await axios.get(getusersurl)
    return response
}