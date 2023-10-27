import React, { useContext } from 'react'

import DataTable from '../DataTable'
import NoDataState from '../NoDataState'
import ChartBox from '../ChartBox'
import Loading from '../Loading'
import { VariationContext } from '../../context/variations'

const OverviewSection = () => {
  const { tableData, isLoading } = useContext(VariationContext)
    const columns = [
        {
          header: 'Uploaded Variation',
          accessorKey: 'main_uploaded_variation',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Existing Variation',
          accessorKey: 'main_existing_variation',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Dp',
          accessorKey: 'main_dp',
          cell: (info) => info.getValue(),
        },
        {
          header: 'DANN Score',
          accessorKey: 'details2_dann_score',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Symbol',
          accessorKey: 'main_symbol',
          cell: (info) => info.getValue(),
        },
        {
          header: 'AF VCF',
          accessorKey: 'main_af_vcf',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Mondo',
          accessorKey: 'links_mondo',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Pheno Pubmed',
          accessorKey: 'links_pheno pubmed',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Provean',
          accessorKey: 'details2_provean',
        },
      ]

  return (
    <ChartBox>
      {
        tableData.length === 0
          ? isLoading ? <Loading /> : <NoDataState />
          : <DataTable columns={columns} data={tableData} />
      }
    </ChartBox>
  )
}

export default OverviewSection
