import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar, MdOutlineLocalOffer } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "./store/BagSlice";

const Details = () => {
  {
    window.scrollTo(0, 0);
  }
const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()
  const {item} = location.state;
  const bag = useSelector((store) => store.Bag);
  const element = bag.indexOf(item.id) >= 0;

  const HandleClicked =(id)=>{
    dispatch(BagActions.AddToBag(id));
  }

  const Wishlist = () => {
    navigate("/wishlist");
  };
  return (
    <div className="detail">
      <div className="Details-wrapper" key={item.id}>
        <img src={item.image} alt={item.company} id="Detail-img" />
        <div className="Detail-info">
          <h3 style={{ fontWeight: "700" }}>{item.company}</h3>
          <h4>{item.item_name}</h4>
          <div className="Detail-rating">
            <span>
              {item.rating.stars} <MdOutlineStar id="Detail-rate" />{" "}
            </span>
            <span id="Detail-rateText"> {item.rating.count} Ratings</span>
          </div>
          <hr />
          <div className="Detail-price">
            <h3 className="Detail-MRP">₹{item.current_price} </h3>
            <span className="Original-mrp">
              {" "}
              MRP{" "}
              <span className="strike Original-mrp">
                ₹{item.original_price}
              </span>{" "}
            </span>
            <span id="price-percent"> ({item.discount_percentage}%oFF)</span>
            <p id="detail-para">inclusive of all taxes</p>
          </div>
          <div className="Price-cont">
            <form>
              <span className="Pick-clr"> Pick Color : </span>
              <input type="radio" id="original" name="color" /> Original <br />
              <input type="radio" id="Blue" name="color" /> Blue <br />
              <input type="radio" id="Green" name="color" /> Green
            </form>

            <div className="Delivery">
              <p className="Pick-clr">Delivery options:</p>
              <p className="left-detail">100% Original Products</p>
              <p className="left-detail">Pay on delivery might be available</p>
              <p className="left-detail">Easy 7 days returns and exchanges</p>
              <p className="left-detail">Try & Buy might be available</p>
            </div>
            <div className="Details-btn">
              {element ? (
                <button className="Detail-bag" onClick={()=>navigate("/bag")} >
                  {" "}
                  GO TO BAG <FaArrowRight id="Detail-bagIcon"  />
                </button>
              ) : (
                <button className="Detail-bag"  onClick={()=>HandleClicked(item.id)} >
                  <HiShoppingBag className="Detail-bagIcon" /> ADD TO BAG
                </button>
              )}

              <button className="Detail-wishlist" onClick={Wishlist}>
                <CiHeart className="Detail-bagIcon" /> WISHLIST
              </button>
            </div>
          </div>
          <div className="Details-ProductDetail">
            <p className="Pick-clr">
              BEST OFFERS <MdOutlineLocalOffer />
            </p>
            <b>Best Price: </b>
            <span className="Discount-price">
              RS.{item.current_price - 300}
            </span>
            <ul className="Details-offers">
              <li>
                Applicable on: Orders above Rs.{item.current_price - 400} (only
                on first purchase)
              </li>
              <li>
                Coupon code: <b> MYNTRA300</b>
              </li>
              <li>
                Coupon Discount: Rs. 300 off (check cart for final savings)
              </li>
            </ul>
            <p className="info_font">View Eligible Products</p>
            <b>10% Instant Discount on ICICI Bank Credit and Debit Card</b>
            <ul className="Details-offers">
              <li>Min Spend ₹3,500, Max Discount ₹1,000.</li>
            </ul>
            <p className="info_font">Terms & Condition</p>
            <b>EMI option available</b>
            <ul className="Details-offers">
              <li>EMI starting from Rs.80/month</li>
            </ul>
            <p className="info_font">View Plan</p>
          </div>
          <hr />
          <div className="Detail-prod">
            <p className="Pick-clr">PRODUCT DETAILS </p>
            <p className="left-detail">{item.item_name}</p>
            <b>
              {item.item_name.split(" ")[item.item_name.split(" ").length - 1]}{" "}
              Details :
            </b>
            <pre className="left-detail">
              Regular style <br />
              Straight shapebr <br />
              V-neck <br />
              Above knee length with straight hem <br />
              Pure cotton machine weave fabric
            </pre>
          </div>
          <b>Material & Care</b>
          <pre className="left-detail">
            Pure cotton <br />
            Hand wash
          </pre>
          <b>Size & Fit</b>
          <p className="left-detail">
            The model (height 5'8) is wearing a size S
          </p>
          <b>Product Code:</b>
          <span style={{ fontWeight: "700", color: "grey" }}>
            {" "}
            23356508
          </span>{" "}
          <br />
          <b>Seller:</b>
          <span className="info_font">Dudani Retail Private Limited</span>
        </div>
      </div>
    </div>
  );
};
export default Details;
