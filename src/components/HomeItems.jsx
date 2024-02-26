import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "./store/BagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { current } from "@reduxjs/toolkit";




const HomeItems = ({ item }) => {
 const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const bag = useSelector((store) => store.Bag);
  const element = bag.indexOf(item.id) >= 0;

  const HandleClicked = () => {
    dispatch(BagActions.AddToBag(item.id));
  };

  const HandleRemove = () => {
    dispatch(BagActions.DeleteToBag(item.id));
  };


 const DetailSection=(item)=>{
  if(item){

    navigate(`/Detail/:${item.company}`, {state:{item}})
  }

}

  return (
    <div key={item.id} className="list">
      <div className="wrapper"  onClick={()=>(DetailSection(item))}  >
      <img src={item.image} alt={item.company} className="item-img" />
      <p className="item-rate">
        {item.rating.stars}⭐|{item.rating.count}
      </p>
 

      <h2 className="item-head">{item.company}</h2>
      <p className="item-name">{item.item_name}</p>
      <pre className="item-info">
        <b className="currPrice">Rs {item.current_price} </b>
        <span className="strike">Rs{item.original_price} </span>
        <span className="red">({item.discount_percentage}%oFF)</span>
      </pre>
      </div>
      {element ? (
        <button type="button" className="btn btn-danger  ADDBag-btn" onClick={HandleRemove}>
          <AiOutlineDelete /> Remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success ADDBag-btn"
          onClick={HandleClicked}
        >
          <IoIosAddCircleOutline /> Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItems;
