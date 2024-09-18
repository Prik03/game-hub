import axios from "axios";

const axiosInstance= axios.create({
    baseURL: 'https://api.rawg.io/api', 

    params:{
        key:'4ed449062b8e4692a59d3cad82e6b2f5'
    }
})

class APIClient{
constructor(endpoint){
    this.endpoint=endpoint;
}

getAll=(AxiosRequestConfig)=>{
    return axiosInstance
    .get(this.endpoint,AxiosRequestConfig)
    .then(res=>res.data);
}

}

export default APIClient;