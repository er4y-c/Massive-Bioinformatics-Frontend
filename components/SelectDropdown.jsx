import React from 'react';
import Select from 'react-select';

const SelectDropdown = ({ id, options, value, handleChange, name, isMulti, className }) => (
  <Select
    instanceId={id}
    classNamePrefix="select"
    defaultValue={value}
    onChange={handleChange}
    name={name}
    options={options}
    isClearable
    isSearchable
    isMulti={isMulti}
    className={className}
  />
  );

export default SelectDropdown;
