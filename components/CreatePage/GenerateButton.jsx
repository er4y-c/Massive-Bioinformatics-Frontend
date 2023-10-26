import React, { useContext } from 'react'

import { VariationContext } from '../../context/variations'
import { variation_services } from '../../services/variation'

const GenerateButton = () => {
  const { filterRows, orderingRows } = useContext(VariationContext)
  const fetchVariations = () => {
    const response =
      variation_services.get_variation(0, 10, filterRows, orderingRows)
    console.log('response', response)
  }

  return (
    <button
      className="bg-blue-700 rounded text-white text-sm py-2 px-4"
      onClick={fetchVariations}
    >Generate Report
    </button>
  )
}

export default GenerateButton
