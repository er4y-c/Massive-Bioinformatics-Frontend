import React from 'react'

import SelectDropdown from '../SelectDropdown'
import Input from '../Input'
import IconButton from '../IconButton'
import { columnData } from '../../utils'

const FilterRow = ({ index, filter, updateFilterRow, removeFilterRow, removable }) => {
  const handleChange = (field, value) => {
    const updatedFilter = { ...filter, [field]: value }
    updateFilterRow(index, updatedFilter)
  }

  return (
    <div className="flex gap-x-2 my-8 flex-wrap gap-y-4">
      <SelectDropdown
        id={`column-${index}`}
        options={columnData}
        handleChange={(value) => handleChange('column', value)}
        value={filter.column}
        className="w-full lg:w-1/2"
      />
      <Input
        name="values"
        value={filter.value}
        handleChange={(event) => handleChange('value', event.target.value)}
        placeholder="Value..."
      />
      <IconButton
        isDisable={!removable}
        onClick={() => removeFilterRow(index)}
        src="/icons/remove.png"
        width={24}
        height={15}
        alt="Remove Button"
      />
    </div>
  )
}

export default FilterRow
