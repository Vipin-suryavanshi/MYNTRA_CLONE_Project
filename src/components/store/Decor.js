import {createSlice} from "@reduxjs/toolkit"
import Default_Items from "../Data/Items"
const Decor_slice = createSlice({
name:"Decor",
initialState:Default_Items[4],
reducers:(state,action)=>{
    return state;
}
})
const Decor_Action = Decor_slice.actions;
export default Decor_slice;