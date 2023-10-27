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

  const handleChange = (value) => {
    let currentValue = value.split(',')
    if (currentValue.length === 1 && selectedColumn?.type === 'numeric') {
      currentValue = value
    }
     if (currentValue !== undefined) {
      const updatedFilter = { [selectedColumn?.value]: currentValue }
      setFilterRows(updatedFilter)
      return
    }
    const updatedFilter = { [selectedColumn?.value]: value }
      setFilterRows(updatedFilter)
  }
  return (
    <div className="flex gap-x-2 my-8 flex-wrap gap-y-4">
      <SelectDropdown
        id="column-select"
        options={columnData}
        handleChange={(value) => handleSelect(value)}
        className="w-full lg:w-1/2"
      />
      <Input
        name="values"
        handleChange={(event) => handleChange(event.target.value)}
        placeholder="Value..."
      />
    </div>
    )
}

export default FilterSection
