import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div>
    <h3>Dashboard</h3>
    <div className='fixed-action-btn'>
      <Link to='/surveys/new' className='btn-floating btn-large red'>
        <i className='large material-icons'>add</i>
      </Link>
    </div>
  </div>
)

export default Dashboard
