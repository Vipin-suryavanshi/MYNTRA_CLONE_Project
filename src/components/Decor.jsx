import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";
import { useContext } from "react";
import { DataContext } from "./Data/DataContext";

const Decor=()=>{
  {   window.scrollTo(0, 0)}
  const {data} = useContext(DataContext)
  const items = data.filter((elem)=>{
    return elem.category.includes("Living")
  })
    return(
     <main>
     <div className="All-items">
       {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
     </div>
   </main>
    )
}
export default Decor;