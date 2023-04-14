import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



interface CartItem {
  id: number;
  img: string,
  name: string;
  category: string,
  price: number;
  quantity: number;
}



export const cartSlice = createSlice({
  initialState: [] as CartItem[],
  name: "cartSlice",
  reducers: {
    addToCart: (state:CartItem[], action) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      
      if(findItem){
        findItem.quantity += 1
      } else {
        const itemClone = {...action.payload, quantity: 1 }
        state.push(itemClone)
      }

    },
  

    increaseCart: (state: CartItem[], action) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if(findItem){
        findItem.quantity += 1
      } else {
        const itemClone = {...action.payload, quantity: 1}
        state.push(itemClone)
      }
     



   
    },

    decreaseCart: (state, action:PayloadAction<CartItem>) => {
      const findItem = state.find((item) => item.id === action.payload.id);
      if(findItem && findItem.quantity > 1){
        findItem.quantity -= 1
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
     
    },


    deleteFromCart: (state: CartItem[], action:PayloadAction<CartItem>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: () => {
      return [];
    },
  },
});

export const { addToCart,increaseCart,decreaseCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;

