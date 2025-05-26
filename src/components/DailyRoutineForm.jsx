import axios from "axios";
import React, { useState } from "react";

const API_BASE_URL = "http://localhost:5002/v1/api";

const DailyRoutineForm = () => {
  const [formData, setFormData] = useState({ title: "", name: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation

    if (!formData.title.trim() || !formData.name.trim()) {
      setError("Please fill in both name and title");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post(`${API_BASE_URL}/routine`, formData, {
        timeout: 5000,
      });
      setSuccess("Routine added succesfully");
      setFormData({ title: "", name: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add routine");
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="text-white flex items-center justify-center min-h-screen">
      <div className="w-[400px] h-[300px] bg-orange-300 rounded-md">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full h-full gap-3"
        >
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            disabled={loading}
            className="w-full py-3 px-4 bg-green-200 text-gray-800 placeholder:text-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter Text"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            className="w-full py-3 px-4 bg-green-200 text-gray-800 placeholder:text-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder="Enter Name"
          />
          <button
            className="w-[200px] bg-indigo-600 p-4 rounded-lg hover:bg-indigo-800"
            type="submit"
          >
            {loading ? "Submitting" : "Submit Now"}
          </button>

          {error && <p className="text-red-900 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default DailyRoutineForm;
