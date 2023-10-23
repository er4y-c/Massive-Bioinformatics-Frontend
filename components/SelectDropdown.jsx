import React from 'react';
import Select from 'react-select';

import { mockOptions } from '../utils';

const SelectDropdown = ({ setPageSize }) => (
    <Select
      classNamePrefix="select"
      defaultValue={mockOptions[0]}
      handleChange={(val) => setPageSize(val.value)}
      name="color"
      options={mockOptions}
      isClearable
      isSearchable
    />
  );

export default SelectDropdown;
