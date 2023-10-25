import React from 'react';
import Select from 'react-select';

const SelectDropdown = ({ options, value, handleChange, name }) => (
  <Select
    classNamePrefix="select"
    defaultValue={value}
    handleChange={handleChange}
    name={name}
    options={options}
    isClearable
    isSearchable
  />
  );

export default SelectDropdown;
