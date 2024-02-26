import { useSelector } from "react-redux";
import HomeItems from "./HomeItems"
const Kids=()=>{
  {   window.scrollTo(0, 0)}
    const items = useSelector(store => store.Kids);
    return(
     <main>
     <div className="All-items">
       {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
     </div>
   </main>
    )
}
export default Kids