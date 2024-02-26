
const Sidebar =({isActive})=>{   
  
    return(<>
          <div className="Sidebar-cont" id={isActive ? "sideHide" : ""}>
            <img src="/images/profile.png" alt="off-img" id="sidebar-img"/>
          </div>
        </>)
}
export default Sidebar;