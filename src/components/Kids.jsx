import { useContext } from "react"
import { DataContext } from "./Data/DataContext"
import HomeItems from "./HomeItems"
const Kids=()=>{
  {   window.scrollTo(0, 0)}
  const {data} = useContext(DataContext)
  const items = data.filter((elem)=>{
    return elem.category.includes("Kids")
  })
  
    return(
     <main>
     <div className="All-items">
       {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
     </div>
   </main>
    )
}
export default Kids