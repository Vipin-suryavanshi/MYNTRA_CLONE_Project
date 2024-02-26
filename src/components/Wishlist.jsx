import { Link } from "react-router-dom";

const Wishlist =()=>{
    {   window.scrollTo(0, 0)}
return(
    <center className="fetch">
 <h2>PLEASE LOG IN</h2>
    <p className="para-grey">Login to view items in your wishlist.</p>
    <img src="../images/wishlist.png" alt="wishlist-img" id="wishlist-img"/>
    <Link to={"/profile"} className="link_cont">
    <button type="button" className="btn btn-outline-primary wishlist-btn">LOGIN</button>
    </Link>
    
    </center>
   
)
}
export default Wishlist;