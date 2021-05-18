import { startProcess, errorProcess, fetchProductsSuccess } from "../actions/productActions";
import axios from "axios";

export const fetchProducts = () => {
    return async(dispatch) => {
        dispatch(startProcess());
        try{

            const response = await axios.get('http://localhost:3600/products');
            const products = response.data;
            dispatch(fetchProductsSuccess(products));

        }catch (e) {

            dispatch(errorProcess());

        }
    }
}