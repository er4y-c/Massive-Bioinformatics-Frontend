/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useMemo } from 'react'
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  sortingFns,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table'

import {
  rankItem,
  compareItems,
} from '@tanstack/match-sorter-utils'

import DebouncedInput from './DebouncedInput'
import Filter from './Filter'
import ButtonGroup from './ButtonGroup'
import { mockData } from '../../utils'
import ResultGroup from './ResultGroup'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({
    itemRank,
  })

  return itemRank.passed
}

const fuzzySort = (rowA, rowB, columnId) => {
  let dir = 0

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      !rowA.columnFiltersMeta[columnId]?.itemRank,
      !rowB.columnFiltersMeta[columnId]?.itemRank,
    )
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

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

function DataTableV2() {
  const finalData = useMemo(() => mockData, []);
  const finalColumnDef = useMemo(() => columns, []);
  const [columnFilters, setColumnFilters] = useState(
    [],
  )
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    data: finalData,
    columns: finalColumnDef,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    sortingFns: {
      fuzzy: fuzzySort,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
   })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'main_symbol') {
      if (table.getState().sorting[0]?.id !== 'main_symbol') {
        table.setSorting([{ id: 'main_symbol', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  return (
    <div className="shadow-md overflow-auto border-b border-gray-200 sm:rounded-lg">
      <div>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(value)}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </div>
      <div className="h-2" />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table && table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-4 whitespace-nowrap text-ellipsis max-w-sm">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center justify-between">
        <ResultGroup
          getState={table.getState}
          getPageCount={table.getPageCount}
          rowsLength={table.getRowModel().rows.length}
          setPageIndex={table.setPageIndex}
          setPageSize={table.setPageSize}
        />
        <ButtonGroup
          setPageIndex={table.setPageIndex}
          getCanPreviousPage={table.getCanPreviousPage}
          previousPage={table.previousPage}
          nextPage={table.nextPage}
          getCanNextPage={table.getCanNextPage}
          getPageCount={table.getPageCount}
        />
      </div>
    </div>
  )
}

export default DataTableV2;
