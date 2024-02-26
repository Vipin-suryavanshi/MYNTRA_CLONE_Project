import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";
import Cart from "./Cart";
const BagContainer = () =>{
    const Bagitm = useSelector((store) => store.Bag);
    const items = useSelector((store) => store.items);
    const Finalitems = items.filter((item) => {
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