import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Routine = () => {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


   useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await axios.get("http://localhost:5002/v1/api/all-routines");
        setRoutines(response?.data?.data || []); // Adjust if your API wraps routines in data
        setLoading(false);
      } catch (err) {
        console.error("Error while getting all the routines", err);
        setError("Failed to fetch routines.");
        setLoading(false);
      }
    };

    fetchRoutines();
  }, []);
    
  return (
    <div className="text-xl text-white">
      <ul>
        {routines.map((routine) => (
          <li key={routine.id}>
            <span>{routine.title}</span>: <span>{routine.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Routine