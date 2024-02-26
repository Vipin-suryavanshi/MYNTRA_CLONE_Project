import {createSlice} from "@reduxjs/toolkit"
import Default_Items from "../Data/Items";

const Kids_Slice = createSlice({
 name:"kid",
 initialState:Default_Items[3],
 reducers:(state,action)=>{
    return state;
 }
})
const Kid_action = Kids_Slice.actions;
export default Kids_Slice;