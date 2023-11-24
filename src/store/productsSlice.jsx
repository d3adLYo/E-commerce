import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const productsSlice = createSlice({
        name:"products",
        initialState,
        reducers: {
            setProducts: (state, action)=>{
                state = action.payload;
                return state
            }
        }
    }
);

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;