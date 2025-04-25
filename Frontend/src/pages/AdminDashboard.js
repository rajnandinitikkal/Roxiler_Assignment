// frontend/src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/users/all', { headers: { Authorization: token } }).then(res => setUsers(res.data));
    axios.get('http://localhost:5000/api/stores').then(res => setStores(res.data));
    axios.get('http://localhost:5000/api/ratings/1', { headers: { Authorization: token } }).then(res => setRatings(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Users: {users.length}</p>
      <p>Total Stores: {stores.length}</p>
      <p>Total Ratings: {ratings.length}</p>
      <h3>Users</h3>
      <ul>{users.map(u => <li key={u.id}>{u.name} ({u.role}) - {u.email}</li>)}</ul>
      <h3>Stores</h3>
      <ul>{stores.map(s => <li key={s.id}>{s.name} - {s.address}</li>)}</ul>
    </div>
  );
}
export default AdminDashboard;