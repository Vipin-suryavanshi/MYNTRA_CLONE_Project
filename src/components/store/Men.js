import {createSlice} from "@reduxjs/toolkit"
import Default_Items from "../Data/Items"

const Mens_slice = createSlice({
    name:"Mens",
    initialState:Default_Items[1],
    reducers:{
        addState:(state,action)=>{
         return state
        }
    }
})

const Men_action = Mens_slice.actions;
export default Mens_slice;