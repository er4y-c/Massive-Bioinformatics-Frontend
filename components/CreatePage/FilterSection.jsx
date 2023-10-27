import React, { useContext } from 'react'

import SelectDropdown from '../SelectDropdown'
import Input from '../Input'
import { VariationContext } from '../../context/variations'
import { columnData } from '../../utils'

const FilterSection = () => {
  const {
    selectedColumn,
    setSelectedColumn,
    setFilterRows,
  } = useContext(VariationContext)

  const handleSelect = (value) => {
    setSelectedColumn(value)
  }

  const handleChange = (column, value) => {
    const updatedFilter = { [column]: value }
    setFilterRows(updatedFilter)
  }
  return (
    <div className="flex gap-x-2 my-8 flex-wrap gap-y-4">
      <SelectDropdown
        id="column-select"
        options={columnData}
        handleChange={(value) => handleSelect(value?.value)}
        className="w-full lg:w-1/2"
      />
      <Input
        name="values"
        handleChange={(event) => handleChange(selectedColumn, event.target.value)}
        placeholder="Value..."
      />
    </div>
    )
}

export default FilterSection
