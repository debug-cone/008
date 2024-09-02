import axios from 'axios';

class PostService {
    static getAllProducts = () => axios.get('https://dummyjson.com/products')
    static getSingleProduct = () => axios.get('https://dummyjson.com/products/1')
}

export default PostService;