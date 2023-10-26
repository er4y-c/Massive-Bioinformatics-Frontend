import React, { useContext } from 'react'

import { VariationContext } from '../../context/variations'
import SelectDropdown from '../SelectDropdown'
import { columnData } from '../../utils'

const OrderingSection = () => {
  const { orderingRows, setOrderingRows } = useContext(VariationContext)

  const handleChange = (field, value) => {
    const updatedFilter = { ...orderingRows, [field]: value }
    setOrderingRows(updatedFilter)
  }
  return (
    <div className="flex flex-wrap gap-4">
        <SelectDropdown
          id="ordering-select"
          options={columnData}
          handleChange={(value) => handleChange('column', value)}
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
          handleChange={(value) => handleChange('value', value)}
        />
    </div>
  )
}

export default OrderingSection
