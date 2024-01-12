import logo from "./../assets/logo.svg";
import profileImg from "./../assets/profile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-content-one">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
        <div className="search-container">
          <input type="text" placeholder="Search for anything" />
          <div className="search-icon">
            <AiOutlineSearch color="white" size={20} />
          </div>
        </div>
      <div className="nav-content-two">
        <ul>
          <li className="nav-item">Docs</li>
          <li className="nav-item">
            <BsBell size={16} />
          </li>
          <li className="nav-item">
            <img src={profileImg} alt="profile" />
          </li>
          <li className="nav-item">
            Adedeji
            <span><IoMdArrowDropdown/></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
