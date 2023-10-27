import React, { useContext } from 'react'

import DataTable from '../DataTable'
import NoDataState from '../NoDataState'
import ChartBox from '../ChartBox'
import { VariationContext } from '../../context/variations'

const OverviewSection = () => {
  const { tableData } = useContext(VariationContext)
    const columns = [
        {
          header: 'Uploaded Variation',
          accessorKey: 'main.uploaded_variation',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Existing Variation',
          accessorKey: 'main.existing_variation',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Dp',
          accessorKey: 'main.dp',
          cell: (info) => info.getValue(),
        },
        {
          header: 'DANN Score',
          accessorKey: 'details2.dann_score',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Symbol',
          accessorKey: 'main.symbol',
          cell: (info) => info.getValue(),
        },
        {
          header: 'AF VCF',
          accessorKey: 'main.af_vcf',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Mondo',
          accessorKey: 'links.mondo',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Pheno Pubmed',
          accessorKey: 'links.pheno pubmed',
          cell: (info) => info.getValue(),
        },
        {
          header: 'Provean',
          accessorKey: 'details2.provean',
        },
      ]

  return (
    <div>
        <h3 className="text-xl text-gray-700 mb-16">OVERVIEW</h3>
        <ChartBox>
          {
          tableData.length === 0
            ? <NoDataState />
            : <DataTable columns={columns} data={tableData} />
         }
        </ChartBox>
    </div>
  )
}

export default OverviewSection
