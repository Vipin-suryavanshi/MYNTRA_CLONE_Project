import {configureStore} from "@reduxjs/toolkit";
import Slice from "./ItemSlice";
import BagSlice from "./BagSlice";
import Mens_slice from "./Men";
import Women_slice from "./Women";
import Kids_Slice from "./Kids";
import Decor_slice from "./Decor";
import Beauty_Slice from "./Beauty";
import SearchSlice from "./SearchSlice";

const Myntrastore = configureStore({
    reducer:{
        items:Slice.reducer,
        Bag : BagSlice.reducer,
        Mens: Mens_slice.reducer,
        Women : Women_slice.reducer,
        Kids : Kids_Slice.reducer,
        Decor : Decor_slice.reducer,
        Beauty : Beauty_Slice.reducer,
        Search_Res : SearchSlice.reducer,
    }
});
export default Myntrastore;