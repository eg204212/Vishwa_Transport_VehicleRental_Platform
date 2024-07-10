import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RegisteredUsers.css'; // Import CSS file for styling
import NavigationBar from '../Components/NavigationBar/Navigation.jsx'; // Import the NavigationBar component
import Dashboard from '../Components/DashBoard/Dashboard.jsx';

const RegisterUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/v1/users/all'); // Adjust the URL as per your backend route
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='background111'>
      <NavigationBar />
      <div className="register-users-page">
        <div className="register-users-header">
          <h2>Registered Users</h2>
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Address</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.fullname}</td>
                <td>{user.Address}</td>
                <td>{user.email}</td>
                <td>{user.MobileNO}</td>
                <td>{user.UserName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RegisterUsers;
