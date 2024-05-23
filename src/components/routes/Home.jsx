import HomeItems from "../HomeItems";
import { useContext } from "react";
import { DataContext } from "../Data/DataContext";


const Home=()=>{
  const {data} = useContext(DataContext)
  console.log("useContext checking data");
  console.log(data);
   return(
    <main>
    <div className="All-items">
      {data.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
    </div>
  </main>
 )
}
export default Home;