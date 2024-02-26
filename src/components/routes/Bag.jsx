
import { useSelector } from "react-redux";
import BagContainer from "../BagContainer";
import EmptyBag from "../EmptyBag";

const Bag = () => {
  const Bag = useSelector(store=>store.Bag)
  return (
    <div className="fetch">
    {Bag.length > 0 ? <BagContainer /> : <EmptyBag/>}
    </div>
    
  );
};
export default Bag;
