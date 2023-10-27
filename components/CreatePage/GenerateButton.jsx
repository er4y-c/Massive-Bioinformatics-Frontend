import React, { useContext } from 'react'
import Image from 'next/image'

import { VariationContext } from '../../context/variations'
import { variation_services } from '../../services/variation'

const GenerateButton = () => {
  const {
    filterRows,
    orderingRows,
    setTableData,
    isLoading,
    setIsLoading } = useContext(VariationContext)

  const fetchVariations = () => {
    setIsLoading(true)
    variation_services.get_variation(0, 10, filterRows, orderingRows)
      .then((res) => {
        setTableData(res?.results)
        setIsLoading(false)
      })
      .catch(() => {
        setTableData([])
        setIsLoading(false)
      })
  }

  return (
    <button
      disabled={isLoading}
      className="bg-blue-700 rounded text-white text-sm py-2 px-4"
      onClick={fetchVariations}
    >
      { isLoading && <Image src="/spinner.svg" width={20} height={20} className="mr-2 inline-block" /> }
      <span>Generate Report</span>
    </button>
  )
}

export default GenerateButton
