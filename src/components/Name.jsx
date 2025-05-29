import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import {
  useCreateNameMutation,
  useGetAllNamesQuery,
} from "../app/service/nameData";

const Name = () => {
  const { data, isLoading, isError, refetch } = useGetAllNamesQuery();
  const [createName] = useCreateNameMutation();
  const [selectOptions, setSelectOptions] = useState(null);

  const names = data?.data || [];

  const options = names.map((name) => ({
    value: name.name,
    label: name.name,
  }));

  const handleChange = (selected) => {
    setSelectOptions(selected);
  };

  const handleCreate = async (inputValue) => {
    try {
      await createName({ name: inputValue }).unwrap();
      const newOption = { value: inputValue, label: inputValue };
      setSelectOptions(newOption);
      refetch(); // Refresh list
    } catch (err) {
      console.error("Failed to create name", err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching names</p>;

  return (
    <div className="max-w-md mx-auto">
      <label className="block mb-2 text-lg font-medium">
        Select or Create Name
      </label>
      <CreatableSelect
        isClearable
        onChange={handleChange}
        onCreateOption={handleCreate}
        options={options}
        value={selectOptions}
      />
      {selectOptions && (
        <p className="mt-2 text-green-600">
          You Selected: <strong>{selectOptions.label}</strong>
        </p>
      )}
    </div>
  );
};

export default Name;
