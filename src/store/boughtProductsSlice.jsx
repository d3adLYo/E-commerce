import { createSlice } from '@reduxjs/toolkit';


const initialState = {};

export const boughtProductsSlice = createSlice({
    name:"boughtProducts",
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const act = action.payload[0];
            if(state[act.short_name]){
                state[act.short_name] = {...state[act.short_name], 'quantity':state[act.short_name].quantity+1, 'selected_size': action.payload[1]}
            }
            else{
                let obj = {
                    'name': act.name,
                    "short_name": act.short_name,
                    'id': act.id,
                    'price': act.price,
                    'sizes': act.sizes,
                    'quantity': 1,
                    "image_url": act.image_url,
                    "url":act.url,
                    "selected_size": action.payload[1],
                };
                state[act.short_name] = obj;
            }
        },
        changeQuantity:(state, action)=>{
            const act = action.payload;
            state[act[0]].quantity += act[1];
        },
        changeSize:(state, action)=>{
            const act = action.payload;
            state[act[0]].selected_size = act[1];
        },
        removeFromCart:(state, action)=>{
            const act = action.payload;
            delete state[act];
        },
        clearCart:(state)=>{
            return state = {};
        }
    }
})

export const { addToCart, changeQuantity, changeSize, removeFromCart, clearCart } = boughtProductsSlice.actions;
export default boughtProductsSlice.reducer;