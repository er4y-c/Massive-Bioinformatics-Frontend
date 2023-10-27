import React, { useContext, useState } from 'react'

import { VariationContext } from '../../context/variations'
import SelectDropdown from '../SelectDropdown'
import { columnData } from '../../utils'

const OrderingSection = () => {
  const { setOrderingRows } = useContext(VariationContext)
  const [selectedColumn, setSelectedColumn] = useState('')
  const handleChange = (column, value) => {
    const updatedFilter = { [column]: value }
    setOrderingRows(updatedFilter)
  }
  return (
    <div className="flex flex-wrap gap-4">
        <SelectDropdown
          id="ordering-select"
          options={columnData}
          handleChange={(value) => setSelectedColumn(value?.value)}
          className="lg:w-1/3 w-full"
        />
        <SelectDropdown
          id="type-select"
          className="lg:w-1/3 w-full"
          options={[
            {
                value: 'ASC', label: 'ASC',
            },
            {
                value: 'DESC', label: 'DESC',
            },
          ]}
          handleChange={(value) => handleChange(selectedColumn, value?.value)}
        />
    </div>
  )
}

export default OrderingSection
