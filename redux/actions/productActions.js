import { ActionTypes } from "../constants/actionTypes";

export const startProcess = () => {
    return {
        type: ActionTypes.START_PROCESS,
        payload: true
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: {
            products,
            loading: false
        }
    };
};

export const errorProcess = () => {
    return {
        type: ActionTypes.ERROR_PROCESS,
        payload: false
    };
};