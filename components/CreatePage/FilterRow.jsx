import React, { useContext } from 'react'

import SelectDropdown from '../SelectDropdown'
import Input from '../Input'
import IconButton from '../IconButton'
import Checkbox from '../Checkbox'
import { VariationContext } from '../../context/variations'
import { columnData } from '../../utils'

const FilterRow = ({ index, removable, removeFilterRow }) => {
  /* const handleChange = (arr, value) => {
    const updatedFilter = { ...filter, [arr]: value }
    updateFilterRow(index, updatedFilter)
  } */
  const {
    isMulti,
    setIsMulti,
    selectedColumn,
    visibleInput,
    setSelectedColumn,
    setFilterRows,
    setVisibleInput,
  } = useContext(VariationContext)

  const handleSelect = (value) => {
    setSelectedColumn(value?.value)
    setVisibleInput(true)
  }

  const handleChange = (column, value) => {
    const updatedFilter = { [column]: value }
    setFilterRows(updatedFilter)
  }

  return (
    <div className="flex gap-x-2 my-8 flex-wrap gap-y-4">
      <SelectDropdown
        id={`column-${index}`}
        options={columnData}
        handleChange={(value) => handleSelect(value?.value)}
        className="w-full lg:w-1/2"
      />
      <Input
        name="values"
        label={isMulti ? 'Min' : null}
        handleChange={(event) => handleChange(selectedColumn, event.target.value)}
        placeholder="Value..."
        visible={visibleInput}
      />
      <Input
        name="upper"
        label="Max"
        handleChange={(event) => handleChange(selectedColumn, event.target.value)}
        placeholder="Value..."
        visible={isMulti}
      />
      { visibleInput ? <Checkbox checked={isMulti} setChecked={setIsMulti} label="Range" /> : null}
      <IconButton
        isDisable={removable}
        onClick={() => removeFilterRow()}
        src="/icons/remove.png"
        width={24}
        height={15}
        alt="Remove Button"
      />
    </div>
  )
}

export default FilterRow
