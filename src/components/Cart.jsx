import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart =()=>{
  const Bag = useSelector(store => store.Bag);
  const items = useSelector((store) => store.items);
  const Finalitems = items.filter((item) => {
    const itemIndex = Bag.indexOf(item.id);
    return itemIndex >= 0;
  });

  const Convenance_fees = 99;
  let Total_item = Bag.length
  let Total_MRP = 0;
  let Total_discount = 0;
 
   Finalitems.forEach(element => {
      Total_MRP += element.original_price;
      Total_discount += element.original_price - element.current_price;
   });
   let Final_pymnt = Total_MRP - Total_discount + Convenance_fees;

  return(
    <div className="cart"> 

       <h3>PRICE DETAILS({Total_item})</h3>
<p className="Amount"> <span>Total MRP </span><span className="MRP">{Total_MRP}</span></p>

<p className="Amount"> <span>Discount on MRP </span><span className="Discount-MRP">-{Total_discount}</span></p>

<p className="Amount"> <span>Convienance Fee</span>  <span className="Conv-fee">₹{Convenance_fees}</span></p>
<hr />
<h3 className="Amount"><span>ToTal Amount</span>   <span className="Total-MRP">₹{Final_pymnt}</span></h3>

<Link to={"/profile"}>
<button type="submit" className="Place-btn">PLACE ORDER</button>
</Link>

  </div>
  )
}
export default Cart;