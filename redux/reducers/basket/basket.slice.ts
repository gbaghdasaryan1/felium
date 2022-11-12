import { IProductMock } from './../../../helpers/data';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketSliceState } from './types';

const LOCAL_STORAGE_KEY = "BSK_KEY";


const initialState: BasketSliceState = {
	items: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "[]") : "[]",
};



export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		addBasketItem: (state, action: PayloadAction<IProductMock>) => {
			if (typeof window !== 'undefined') {
				console.log('You are on the browser')
				state.items.push(action.payload);
				localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
			}
		},
		removeBasketItem: (state, action: PayloadAction<IProductMock>) => {
			state.items = state.items.filter(
				(f) => f.id !== action.payload.id
			);

			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
		},
	},
});

export const basketAction = basketSlice.actions;
export const basketReduser = basketSlice.reducer;
