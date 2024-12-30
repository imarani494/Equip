import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const hours = new Date().getHours();
    const greeting =
      hours < 12
        ? 'Good Morning'
        : hours < 18
        ? 'Good Afternoon'
        : 'Good Evening';
    const user = JSON.parse(localStorage.getItem('user'));
    setMessage(`${greeting}, Mr. ${user.firstName} ${user.lastName}`);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LandingPage;
