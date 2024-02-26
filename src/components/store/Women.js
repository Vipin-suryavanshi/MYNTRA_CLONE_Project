import {createSlice} from "@reduxjs/toolkit"
import Default_Items from "../Data/Items"
const Women_slice = createSlice({
name:"Women",
initialState:Default_Items[2],
reducers:(state,action)=>{
    return state
}
})
const Women_action = Women_slice.actions;
export default Women_slice;