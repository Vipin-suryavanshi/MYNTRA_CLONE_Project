import {createSlice} from "@reduxjs/toolkit"
import Default_Items from "../Data/Items"

const SearchSlice = createSlice({
    name:"Search_Res",
    initialState:Default_Items[0],
    reducers:{
        addState :(state, action)=>{
            return state;
        }
    }
})
const Search_option = SearchSlice.actions
export default SearchSlice