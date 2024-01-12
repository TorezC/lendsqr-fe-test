import briefcase from "./../assets/briefcase.svg";
import home from "./../assets/home.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SideBarList from "./SideBarList";


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="side-lists">
        <ul>
          <li className="sidelist">
            <img src={briefcase} alt="briefcase" />
            <span >Switch Organization</span>
            <MdOutlineKeyboardArrowDown/>
          </li>
          <li className="sidelist">
            <img src={home} alt="briefcase" />
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="side-lists">
        <p>CUSTOMERS</p>
          <SideBarList num={0} />
      </div>
      <div className="side-lists">
        <p>BUSINESSES</p>
          <SideBarList num={1} />
      </div>
      <div className="side-lists">
        <p>SETTINGS</p>
          <SideBarList num={2} />
      </div>
    </div>
  )
}

export default Sidebar