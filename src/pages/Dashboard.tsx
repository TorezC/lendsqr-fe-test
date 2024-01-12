import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Navbar/>
      <div className="dashboard">
        <Sidebar/>
        <div className="dashboard-content">
          <p className="dash-head">
            Users
          </p>
          <div className="user-info-container">
            <div className="userinfo">
              <div className="user-icon"></div>
              <p className="userinfo-title"></p>
              <p className="userinfo-num"></p>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard