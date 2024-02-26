import { PiCopyrightLight } from "react-icons/pi";
import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <footer>
        <div className="footer-flex">
          <div className="foot-item">
          <Link to={"/profile"} className="link_cont">
          <h3>ONLINE SHOPPING</h3>
          <ul className="font">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift card</li>
            <li>Myntra insider</li>
          </ul>
          </Link>
          </div>
          <div className="foot-item">
          <Link to={"/profile"} className="link_cont">
          <h3>CUSTOMER POLICIES</h3>
          
          <ul className="font">
            
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Track Order</li>
            <li>Shipping</li>
            <li>Cancellation</li>
          
          </ul>
          </Link>
          </div>
          <div className="foot-item">
          <Link to={"/profile"} className="link_cont">
          <h3>USEFUL LINKS</h3>
          <ul className="font">
          <li>Return</li>
            <li>Blog</li>
            <li>Carrier</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>White Hat</li>
            <li>Clear trip</li>
          </ul>
          </Link>
          </div>
          </div>
          <hr />
          <p id="foot-info"><span id="copy"><PiCopyrightLight /></span>2023 www.myntra.com. All Right Reserved</p>
        </footer>
    )
}
export default Footer;