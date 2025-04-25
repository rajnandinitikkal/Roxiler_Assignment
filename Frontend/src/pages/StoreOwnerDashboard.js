// frontend/src/pages/StoreOwnerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StoreOwnerDashboard() {
  const [ratings, setRatings] = useState([]);
  const [avg, setAvg] = useState(0);
  const storeId = 1; // Replace with actual owner-specific storeId later

  useEffect(() => {
    axios.get(`http://localhost:5000/api/stores/${storeId}/ratings`).then(res => setRatings(res.data));
    axios.get(`http://localhost:5000/api/stores/${storeId}/average`).then(res => setAvg(res.data.avg));
  }, []);

  return (
    <div>
      <h2>Store Owner Dashboard</h2>
      <p>Average Rating: {avg}</p>
      <h3>Ratings</h3>
      <ul>{ratings.map(r => <li key={r.id}>User {r.user_id}: {r.rating}</li>)}</ul>
    </div>
  );
}
export default StoreOwnerDashboard;