import {configureStore} from "@reduxjs/toolkit";
import BagSlice from "./BagSlice";


const Myntrastore = configureStore({
    reducer:{
        Bag : BagSlice.reducer,
    }
});
export default Myntrastore;