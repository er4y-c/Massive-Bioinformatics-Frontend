import React, { useContext } from 'react'
import Image from 'next/image'

import DataTable from '../DataTable'
import NoDataState from '../NoDataState'
import ChartBox from '../ChartBox'
import Loading from '../Loading'
import { VariationContext } from '../../context/variations'
import { variation_services } from '../../services/variation'

const OverviewSection = () => {
  const {
    filterRows,
    orderingRows,
    tableData,
    setTableData,
    isLoading,
    setIsLoading,
  } = useContext(VariationContext)

  const fetchVariations = () => {
    setIsLoading(true)
    variation_services.get_variation(filterRows, orderingRows)
      .then((res) => {
        setTableData(res)
        setIsLoading(false)
      })
      .catch(() => {
        setTableData([])
        setIsLoading(false)
      })
  }

    const columns = [
        {
          header: 'Uploaded Variation',
          accessorKey: 'main_uploaded_variation',
        },
        {
          header: 'Existing Variation',
          accessorKey: 'main_existing_variation',
        },
        {
          header: 'Dp',
          accessorKey: 'main_dp',
        },
        {
          header: 'DANN Score',
          accessorKey: 'details2_dann_score',
        },
        {
          header: 'Symbol',
          accessorKey: 'main_symbol',
        },
        {
          header: 'AF VCF',
          accessorKey: 'main_af_vcf',
        },
        {
          header: 'Mondo',
          accessorKey: 'links_mondo',
        },
        {
          header: 'Pheno Pubmed',
          accessorKey: 'links_pheno pubmed',
        },
        {
          header: 'Provean',
          accessorKey: 'details2_provean',
        },
      ]

  return (
    <>
    <button
      disabled={isLoading}
      className="bg-blue-700 rounded text-white text-sm py-2 px-4"
      onClick={fetchVariations}
    >
      { isLoading && <Image src="/spinner.svg" width={20} height={20} className="mr-2 inline-block" /> }
      <span>Generate Report</span>
    </button>
    <ChartBox>
      {
        tableData.length === 0
          ? isLoading ? <Loading /> : <NoDataState />
          : <DataTable columns={columns} data={tableData?.results} totalResult={tableData?.count} />
      }
    </ChartBox>
    </>
  )
}

export default OverviewSection
