import axios from "axios";
export default function ProductsApi() {
    return axios.get("https://fakestoreapi.com/products");
}