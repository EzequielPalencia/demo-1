import React, { useState, useEffect } from 'react';

const ViewAdmin = ({ images }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch('http://localhost:8080/api/');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error al obtener productos destacados:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div >
        <h2>Esta es la vista del admin</h2>
    </div>
  );
};

export default ViewAdmin;
