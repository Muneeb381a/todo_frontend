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
        setRoutines(response?.data?.data || []); 
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
    <div className="text-xl text-white min-h-screen flex justify-center items-center gap-5">
      <ul className='bg-blue-500 p-5 rounded-2xl'>
        {routines.map((routine) => (
          <li key={routine.id} className='flex gap-10 mb-5'>
            <span className='bg-indigo-950 p-2'>{routine.title}</span>: <span className='bg-indigo-950 p-2'>{routine.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Routine