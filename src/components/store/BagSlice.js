
import {createSlice} from "@reduxjs/toolkit"

 const BagSlice = createSlice({
name:"Bag",
initialState:[],
reducers:{
    AddToBag:(state,action)=>{
         state.push(action.payload)
    },
    DeleteToBag:(state,action)=>{
       return state.filter(itemId => itemId !== action.payload);
    },
    Removeitm:(state,action)=>{
        return state.filter(itemId => itemId !== action.payload);
    }
}
});
export const BagActions = BagSlice.actions;
export default BagSlice;

