import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Send registration data to the backend
      await axios.post('http://localhost:5000/api/register', registrationData);

      // Update state to show success message
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Registration failed', error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="App">
      <h1>Simple React MongoDB Ap2</h1>
      {registrationSuccess ? (
        <p>User registered successfully!</p>
      ) : (
        <form onSubmit={handleRegistration}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={registrationData.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={registrationData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={registrationData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default App;
