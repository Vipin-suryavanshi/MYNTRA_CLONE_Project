import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";
import Cart from "./Cart";
import { DataContext } from "./Data/DataContext";
import { useContext } from "react";
const BagContainer = () =>{
  const {data} = useContext(DataContext)
    const Bagitm = useSelector((store) => store.Bag);
    const Finalitems = data.filter((item) => {
      const itemIndex = Bagitm.indexOf(item.id);
      return itemIndex >= 0;
    });
   return(
    <div className="bag">
    <div className="itm-show">
      {Finalitems.map((item) => (
        <BagSummary Bagitm={item} key={item.id}/>
      ))}
    </div>

        <Cart  />
   
  </div>
   )
}
export default BagContainer;