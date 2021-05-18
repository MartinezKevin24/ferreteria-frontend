import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products: [],
    loading: false
};

export const productReducer = ( state = initialState, {type, payload}) => {
    switch (type){
        case ActionTypes.START_PROCESS:
            return {
                ...state,
                loading: payload
            };
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: payload.products,
                loading: payload.loading
            };
        case ActionTypes.ERROR_PROCESS:
            return {
                ...state,
                loading: payload
            };
        default:
            return state;
    }
}