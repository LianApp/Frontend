import { useMutation } from "react-query"
import axios from "./axiosConfig"

export const useLogin = useMutation(newLogin => {
    return axios.post('/login', newLogin)
})