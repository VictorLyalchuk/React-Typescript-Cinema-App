import { ILogin } from "../Models/Login-User";
import { instance } from "../API/Axios.api"

export const AuthService = {
    async login (userData:ILogin):Promise<string | undefined>{
        const {data} =  await instance.post<string>('accounts/login', userData);
        return data;
    },
    async logout(){

    },
    
}