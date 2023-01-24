import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IProduct {
  code: string;
  name: string;
  imageDisplay: string;
  imageSmall: string;
  imageThumb: string;
  ingredients: string;
  status: string;
  count: number;
}

export interface ProductState {
  productsList: IProduct[];
}

const initialState: ProductState = {
  productsList: [],
};

export const productSlider = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      //state.productsList = [];
      state.productsList.push(action.payload);
    },
    incrementProduct: (state, action) => {
      const updateProduct = state.productsList.findIndex(
        product => product.code === action.payload.code,
      );
      state.productsList[updateProduct] = {
        ...state.productsList[updateProduct],
        count: state.productsList[updateProduct].count + 1,
      };
    },
    deleteSelectedItems: (state, action) => {
      let data = state.productsList;
      action.payload.selectedIdItems.forEach((item: string) => {
        data = data.filter(product => product.code !== item);
      });
      state.productsList = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct, incrementProduct, deleteSelectedItems} =
  productSlider.actions;

export default productSlider.reducer;
