import { Link } from "react-router-dom";

const EmptyBag = () => {
  {   window.scrollTo(0, 0)}
  return (
    <div className="EmptyBag">
      <center>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
          alt="empty-bag"
        />

        <div className="EmptyBag-info">
          <h4>Hey,it feels so light!</h4>
          <p className="para-grey">
            There is nothing in your bag. Let's add some items.
          </p>
          <Link to={"/wishlist"}>
            <button type="button" className="btn btn-outline-danger ">
              ADD Items From Wishlist
            </button>
          </Link>
          <Link to={"/"}>
          <button type="button" className="btn btn-outline-primary  Home-btn">
            ADD Items From HOME
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
};
export default EmptyBag;
