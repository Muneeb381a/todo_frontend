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
      <label htmlFor="names" className="block mb-2 text-lg font-medium">
        Select Name
      </label>

      <select
        id="names"
        value={selected}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
      >
        <option value=""> Select Name</option>
        {res?.data?.data?.map((name) => (
          <option key={name.id} value={name.name}>
            {name.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Name;
