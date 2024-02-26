import {createSlice} from "@reduxjs/toolkit"

import Default_Items from "../Data/Items.js";
  

 const Slice = createSlice({
name:"items",
initialState:Default_Items[0],

reducers:{
    addIntialState:(state,action) =>{
        return state
    }
}
});
export const itemActions = Slice.actions;
export default Slice;

