/* eslint-disable arrow-body-style */
import React from 'react'

import DataTable from '../DataTable'
import { mockData } from '../../utils'

const OverviewSection = () => {
    const columns = [
        {
          header: 'Row',
          accessorKey: 'row',
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        },
        {
          header: 'Uploaded Variation',
          accessorKey: 'main_uploaded_variation',
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        },
        {
          header: 'Existing Variation',
          accessorKey: 'main_existing_variation',
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        },
        {
          header: 'Dp',
          accessorKey: 'main_dp',
          footer: (props) => props.column.id,
        },
        {
          header: 'DANN Score',
          accessorKey: 'details2_dann_score',
          footer: (props) => props.column.id,
        },
        {
          header: 'Symbol',
          accessorKey: 'main_symbol',
          cell: (info) => info.getValue(),
          footer: (props) => props.column.id,
        },
        {
          header: 'AF VCF',
          accessorKey: 'main_af_vcf',
          footer: (props) => props.column.id,
        },
      ]
  return (
    <div>
        <h3 className="text-xl text-gray-700 mb-16">OVERVIEW</h3>
        <DataTable columns={columns} data={mockData} />
    </div>
  )
}

export default OverviewSection
