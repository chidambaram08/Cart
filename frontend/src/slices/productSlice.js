import { createSlice } from "@reduxjs/toolkit";
import { clearError } from "./orderSlice";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    product: {},
    isReviewSubmitted: false,
  },
  reducers: {
    productRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    productSuccess(state, action) {
      return {
        ...state,
        loading: false,
        product: action.payload.product,
      };
    },
    productFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    createReviewRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    createReviewSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isReviewSubmitted: true,
      };
    },
    createReviewFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    clearError(state, action) {
      return {
        ...state,
        error: null,
      };
    },
  },
});

const { actions, reducer } = productSlice;
export const { 
    productRequest, 
    productFail, 
    productSuccess,
    createReviewRequest,
    createReviewSuccess,
    createReviewFail,
     

 } = actions;

export default reducer;
