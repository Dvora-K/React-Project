import axios from "axios";
export default new class ApiService {
    
    BASE_URL="https://jsonplaceholder.typicode.com";
   
    getUserList(){
        return axios.get(`${this.BASE_URL}/users`);
    }

    deleteUser(userId:string){
        return axios.delete(`${this.BASE_URL}/users/${userId}`)
    }
}