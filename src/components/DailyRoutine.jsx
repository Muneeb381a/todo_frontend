import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:5002/v1/api";

const DailyRoutine = () => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // memoized fetch function

  const fetchRoutines = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/routine`, {
        timeout: 5000,
      });
      setRoutines(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      setError(err.rsponse?.data?.message || "Failed to fetch daily routine");
      console.error("Fetch Error", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch data on mount
  useEffect(() => {
    fetchRoutines();
  }, [fetchRoutines]);

  // loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-lg animate-pulse">Loading routines</p>
      </div>
    );
  }

  // error state

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-red-500">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-5">Daily Routine</h1>

        {routines.length === 0 ? (
          <p className="text-gray-400"> nO Routines Found</p>
        ) : (
          <ul className="w-full space-y-2">
            {routines.map((routine) => (
                <li
                key={routine.id}
                  className="p-3 bg-gray-800 rounded-md shadow-sm hover:bg-gray-700 trasition-colors"
                >
                  <span className="font-medium">{routine.title}</span>
                  {routine.name && (
                    <span className="text-gray-400 ml-2">{routine.name}</span>
                  )}
                </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DailyRoutine;
