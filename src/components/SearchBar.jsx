import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const SearchBar=({Search,Setsearch})=>{
 const navigate = useNavigate()
 const [value,Setvalue]=useState("")
const SearchResult=(event)=>{
  
if(event.key === "Enter" ){  
  if(value !== ""){

    navigate(`/search/${value}`)
    Setsearch(current => !current);
   Setvalue("");
  }
  else{
    navigate(`/search/query`)
    Setsearch(current => !current);
  }
}

}

const SearchHandle=()=>{
  if(value !== ""){
    // console.log(event)
    navigate(`/search/${value}`)
    Setsearch(current => !current);
   Setvalue("");
  }
  else{
    navigate(`/search/query`)
    Setsearch(current => !current);
  }
}


 return(
    <div className="searchBar">
          <div className={`Search-cont ${Search ?  "SearchHide" : ""} `} >
          <input type="text" placeholder="Search Item Here...." id="SearchField" onKeyUp={(event)=> SearchResult(event)}
           onChange={(event)=>Setvalue(event.target.value)}
          value={value}
              />
              <IoSearch  id="Search-Icon" onClick={SearchHandle}  onChange={(event)=>Setvalue(event.target.value)}/>
          <RxCross2 id="cross-Icon" onClick={()=> Setsearch(current => !current)}/>
          </div>  
          
        </div>
 )
}
export default SearchBar;


