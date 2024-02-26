import { useSelector } from "react-redux";
import HomeItems from "../HomeItems";

const Home=()=>{
    const items = useSelector(store => store.items);
    // console.log("got items",items)
   return(
    <main>
    <div className="All-items">
      {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
    </div>
  </main>
 )
}
export default Home;