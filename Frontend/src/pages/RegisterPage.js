// // frontend/src/pages/RegisterPage.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function RegisterPage() {
//   const [form, setForm] = useState({ name: '', email: '', address: '', password: '', role: 'user' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,16}$/;
//     if (!passwordRegex.test(form.password)) return alert('Password must include 8-16 characters, one uppercase and one special character.');
//     try {
//       await axios.post('http://localhost:5000/api/users/register', form);
//       alert('Registered successfully');
//     } catch (err) {
//       alert('Error: ' + (err.response?.data || err.message));
//     }
//   };

//   return (
//     <><form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required minLength={3} maxLength={60} />
//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" />
//       <input name="address" placeholder="Address" value={form.address} onChange={handleChange} maxLength={400} />
//       <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
//       <select name="role" onChange={handleChange} value={form.role}>
//         <option value="user">User</option>
//         <option value="owner">Store Owner</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit">Register</button>
//     </form><p>Already have an account? <a href="/">Login here</a></p></>
//   );
// }
// export default RegisterPage;




// frontend/src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', address: '', password: '', role: 'user' });
  const navigate = useNavigate(); // To navigate after registration

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,16}$/;
    if (!passwordRegex.test(form.password)) {
      return alert('Password must include 8-16 characters, one uppercase letter, and one special character.');
    }

    try {
       // Log data being sent
       console.log('Sending registration data:', form);
      // Send the registration request
      const response = await axios.post('http://localhost:5000/api/users/register', form);

      // Log the response for debugging
      console.log('Response from server:', response);

      // Handle success
      if (response.status === 200) {
        alert('Registered successfully!');
        
        // Role-based redirection
        if (form.role === 'admin') {
          navigate('/admin-dashboard'); // Redirect to admin dashboard
        } else if (form.role === 'owner') {
          navigate('/owner-dashboard'); // Redirect to owner dashboard
        } else {
          navigate('/user-dashboard'); // Redirect to user dashboard
        }
      }
    } catch (err) {
      // Error handling
      const errorMessage = err.response?.data || err.message || 'An error occurred';
      alert('Error: ' + errorMessage);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
          minLength={3} 
          maxLength={60} 
        />
        <input 
          name="email" 
          placeholder="Email" 
          value={form.email} 
          onChange={handleChange} 
          required 
          type="email" 
        />
        <input 
          name="address" 
          placeholder="Address" 
          value={form.address} 
          onChange={handleChange} 
          maxLength={400} 
        />
        <input 
          name="password" 
          placeholder="Password" 
          type="password" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
        <select 
          name="role" 
          onChange={handleChange} 
          value={form.role}
        >
          <option value="user">User</option>
          <option value="owner">Store Owner</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      
      <p>Already have an account? <a href="/login">Login here</a></p>
    </>
  );
}

export default RegisterPage;
