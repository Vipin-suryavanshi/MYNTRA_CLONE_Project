import React from "react";
import { useParams } from "react-router-dom";
import HomeItems from "./HomeItems";
import { DataContext } from "./Data/DataContext";
import { useContext } from "react";


const SearchResult =()=>{
  const {data} = useContext(DataContext)

  {window.scrollTo(0, 0)}

  const { query } = useParams();
   var modQuery = query.charAt(0).toUpperCase() + query.slice(1);

   const filteredResults = data.filter((element) => {
    return element.item_name.includes(modQuery);
    })
  return(
    
   <main>
    <div className="All-items">
      {filteredResults.length === 0 ? (
        <>
       <h3 >{`No Result Found :  `} </h3> <span id="Results">{modQuery === "Query" ? "See Popular Search" : modQuery}</span>
        <div className="result-Img">
          <img src={"/images/no-results.png"} alt="no-result" id="no-result" />
          <h3 id="NotMatches">We couldn't find any matches!</h3>
          <p id="Searches">Popular searches:  Shoes, Watches,dress,jersey,Shirts,bedsheet,blanket,eyelinear,dryer,blazer,kurta,lehnga choli,Sunglasses,jeans</p>
          </div>
       
          </>
      ) : (
        <div className="item">
          {filteredResults.map((item) => (
         <HomeItems item={item} key={item.id} ></HomeItems>
           
          ))}
       </div>
      )}
    </div>
  </main>
);
};
  
export default SearchResult;