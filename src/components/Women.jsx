import HomeItems from "./HomeItems"
import { DataContext } from "./Data/DataContext"
import { useContext } from "react"
const Women=()=>{
  {   window.scrollTo(0, 0)}
   const {data} = useContext(DataContext)
    const items = data.filter((elem)=>{
      return elem.category.includes("Women")
    })
   return(
    <main>
    <div className="All-items">
      {items.map(item=><HomeItems item={item} key={item.id}></HomeItems>)}
    </div>
  </main>
   )
}
export default Women;