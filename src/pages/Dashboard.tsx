import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { usersData } from "../data";
import UserTable from "../components/UserTable";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard-content">
          <p className="dash-head">Users</p>
          <div className="user-info-container">
            {
              usersData.map((item, index) => (

              <div className="userinfo" key={index}>
                <img src={item.icon} alt={item.name} />
                <p className="userinfo-title">{item.name}</p>
                <p className="userinfo-num">{item.num.toLocaleString()}</p>
              </div>
              ))
            }
          </div>
          <UserTable/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
