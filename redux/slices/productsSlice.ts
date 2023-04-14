import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";










export const productsSlice = createSlice({
    initialState: data.products,
    name: "productsSlice",
    reducers: {},

})

export const {} = productsSlice.actions
export default productsSlice.reducer 