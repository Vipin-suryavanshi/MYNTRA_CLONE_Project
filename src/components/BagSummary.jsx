import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { BagActions } from "./store/BagSlice";

const BagSummary =({Bagitm})=>{
  {   window.scrollTo(0, 0)}
  const dispatch = useDispatch()
  const RemoveItm =()=>{
    dispatch(BagActions.Removeitm(Bagitm.id))
  }
return(
    <>
    <div className="itm-detail">

      <img src={Bagitm.image} alt={Bagitm.company} className="show-img" />
      <div className="cart-itm">
        <h2 className="Bagitem-head">{Bagitm.company}</h2>
        <p className="item-cartName">{Bagitm.item_name}</p>
        <pre className="Bagitem-info">
          <b className="currPrice">Rs {Bagitm.current_price} </b>
          <span className="strike">Rs{Bagitm.original_price} </span>
          <span className="red">({Bagitm.discount_percentage}%oFF)</span>
        </pre>
        <span className="return">{Bagitm.return_period}days return available</span>
        <p className="delivery">
          Delivery By <span className="delivery-clr">{Bagitm.delivery_date}</span>
        </p>
      </div>
    </div>

    <div className="disable-icon">
      <RxCross1 className="cross-icon" onClick={RemoveItm}/>
    </div>
    </>
    

)
}
export default BagSummary;