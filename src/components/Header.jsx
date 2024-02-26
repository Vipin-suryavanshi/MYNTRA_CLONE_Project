import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { HiMiniBars3 } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";

import SearchBar from "./SearchBar";


const Header =()=>{
  const [isActive, setIsActive] = useState(true);
  const [query,setquery] = useState("");
  const [Search, Setsearch] = useState(true);
 const navigate = useNavigate()


  const handleClick = () => {
    // 👇️ toggle isActive state on click

    setIsActive(current => !current);

    
  };

  const InputSearch=(event)=>{
    if(event.key === "Enter"){
      navigate(`/search/${query}`)
      event.target.value = "";
    }
  }

  const bag = useSelector(store => store.Bag)
    return( <>
<header className="head">
<Sidebar  isActive={isActive}></Sidebar>
          <div className="logo">
        
            <Link to={"/"} >
            <img src={"/images/myntra_logo.webp"} alt="logo image" id="logo" />
            </Link>
          </div>
          <div className="new-head">
          <HiMiniBars3 id="new-bar" onClick={handleClick}/>
          <Link to={"/"} className="link_cont" >
          <h4 id="new-name">Myntra</h4>
          </Link>
          </div>
          <div className="variety-items">
            <ul className="items" id={isActive ? "itemsHide" : ""}>
              <Link to={"/Mens-item"} className="link_cont" onClick={handleClick}>
              <li className="first-li">
                <b>MEN</b>
              </li>
            
              </Link>
              <Link to={"/Women-item"} className="link_cont" onClick={handleClick}>
              <li>
                <b>WOMEN</b>
              </li>
              </Link>
             <Link to={"/Kids-item"} className="link_cont" onClick={handleClick}>
             <li>
                <b>KIDS</b>
              </li>
             </Link>
             
             <Link to={"/Decor-item"} className="link_cont" onClick={handleClick}>
             <li>
                <b>HOME & LIVING</b>
              </li>
             </Link>
            <Link to={"/Beauty-item"} className="link_cont" onClick={handleClick}>
            <li>
                <b>BEAUTY</b>
              </li>
            </Link>
           
           <Link to={"/Profile"} className="link_cont" onClick={handleClick}>
           <li>
                <b>STUDIO </b>
                <span id="spanhead"> NEW</span>
              </li>
           </Link>
            
            </ul>
          </div>
          <div className="inp-fielder">
    <input
      type="text"
      placeholder="Search for products, brands and more"
      id="field"
      onChange={(e)=>setquery((e.target.value))}
      onKeyUp={InputSearch }
    />
   </div>
          <div className="info">
            <ul className="icons">
              <li  className="Profile-Icon">
                <Link to={"/profile"} className="link_cont">
                <CgProfile  className="icon"/>
                <p className="bold">profile</p>
                </Link>
               
              </li>
              <li className="SearchIcon" onClick={()=>Setsearch(current => !current)}> <GrSearch className="icon search" />
              <p className="bold">Search</p>
              </li> 
              <li>
                <Link to={"/wishlist"} className="link_cont">
                <FaRegHeart className="icon"/>
                <p className="bold">Wishlist</p>
                </Link>
               
              </li>
              
              
              <li>
              <Link to={"/Bag"} className="link_cont">
                <HiOutlineShoppingBag className="icon"/>
                <span id="bag-inp">{bag.length}</span>
                <p className="bold" id="bag">Bag</p>
                </Link>
              </li>
             
            </ul>
          </div>
        
        </header>
        <SearchBar  Search={Search} Setsearch={Setsearch} />
        
       </>
    )
}
export default Header;