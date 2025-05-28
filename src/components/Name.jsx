import React, { useState } from "react";
import { useGetAllNamesQuery } from "../app/service/nameData";

const Name = () => {
  const [selected, setSelected] = useState("");

  const res = useGetAllNamesQuery();

  console.log(res);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor="names" className="block mb-2 text-lg font-medium w-full">
        Select Name
      </label>

      <select
        id="names"
        value={selected}
        onChange={handleChange}
        className="border px-4 py-3 rounded w-full bg-blue-400 cursor-pointer"
      >
        <option value=""> Select Name</option>
        {res?.data?.data?.map((name) => (
          <option key={name.id} value={name.name} className="text-orange-500 hover:text-orange-800 cursor-pointer">
            {name.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Name;
