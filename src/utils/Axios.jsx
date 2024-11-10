
import  axios  from "axios";
const instance=axios.create({
    baseURL:"https://fakestoreapi.com"
})

export default instance;

// used for the fatching of the data