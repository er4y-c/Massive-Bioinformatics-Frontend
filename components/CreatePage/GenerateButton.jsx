/* eslint-disable arrow-body-style */
import React, { useContext } from 'react'

import { VariationContext } from '../../context/variations'

const GenerateButton = () => {
  const { filterRows, orderingRows, columns } = useContext(VariationContext)
  return (
    <button
      className="bg-blue-700 rounded text-white text-sm py-2 px-4"
      onClick={() => console.log('columns', columns, 'filters', filterRows, 'ordering', orderingRows)}
    >Generate Report
    </button>
  )
}

export default GenerateButton
