import { createSlice } from "@reduxjs/toolkit";
import Default_Items from "../Data/Items";
const Beauty_Slice = createSlice({
name:"Beauty",
initialState:Default_Items[5],
reducers:(state,action)=>{
    return state;
}
})

const Beauty_Action = Beauty_Slice.actions;
export default Beauty_Slice;