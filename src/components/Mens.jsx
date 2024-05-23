import { useSelector } from "react-redux";
import HomeItems from "./HomeItems"
import { DataContext } from "./Data/DataContext";
import { useContext } from "react";
const Mens=()=>{
  {   window.scrollTo(0, 0)}
  const {data} = useContext(DataContext)

    const items = data.filter((elem)=>{
      return elem.category.includes("Men") 
    })
  
   return(
    <main>
    <div className="All-items">
      {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
    </div>
  </main>
   )
}
export default Mens;