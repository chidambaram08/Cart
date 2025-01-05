import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'products',
    initialState:{
        loading: false,
        product:{}
    },
    reducers: {
        productRequest(state,action){
            return {
                loading: true
            }
        },
        productSuccess(state,action){
            return{
                loading: false,
                product: action.payload.product
            }
        },
        productFail(state,action){
            return{
                loading: false,
                error: action.payload
            }
        }

        
    }
});

const {actions,reducer } = productSlice;
export const {productRequest,productFail,productSuccess} = actions;

export default reducer;