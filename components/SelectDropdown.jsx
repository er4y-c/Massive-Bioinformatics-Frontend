import React from 'react';
import Select from 'react-select';

const SelectDropdown = ({ id, options, value, handleChange, name, isMulti }) => (
  <Select
    instanceId={id}
    classNamePrefix="select"
    defaultValue={value}
    handleChange={handleChange}
    name={name}
    options={options}
    isClearable
    isSearchable
    isMulti={isMulti}
  />
  );

export default SelectDropdown;
