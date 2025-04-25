// frontend/src/pages/UserDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/stores').then(res => setStores(res.data));
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>{stores.map(store => (
        <li key={store.id}>
          {store.name} - {store.address} - <RatingForm storeId={store.id} />
        </li>
      ))}</ul>
    </div>
  );
}

function RatingForm({ storeId }) {
  const [rating, setRating] = useState(0);

  const submitRating = async () => {
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/ratings', { store_id: storeId, rating, user_id: 1 }, { headers: { Authorization: token } });
    alert('Rating submitted');
  };

  return (
    <span>
      <input type="number" min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)} />
      <button onClick={submitRating}>Submit</button>
    </span>
  );
}
export default UserDashboard;