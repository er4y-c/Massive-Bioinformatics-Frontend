/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

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

import { mockData } from '../../utils'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
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

export function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }) {
    const [value, setValue] = React.useState(initialValue)

    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value)
      }, debounce)

      return () => clearTimeout(timeout)
    }, [value])

    return (
      <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />
    )
  }

  function Filter({
    column,
    table,
  }) {
    const firstValue = table
      .getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id)

    const columnFilterValue = column.getFilterValue()

    const sortedUniqueValues = React.useMemo(
      () =>
        typeof firstValue === 'number'
          ? []
          : Array.from(column.getFacetedUniqueValues().keys()).sort(),
      [column.getFacetedUniqueValues()],
    )

    return typeof firstValue === 'number' ? (
      <div>
        <div className="flex space-x-2">
          <DebouncedInput
            type="number"
            min={column.getFacetedMinMaxValues()?.[0] ?? ''}
            max={column.getFacetedMinMaxValues()?.[1] ?? ''}
            value={(columnFilterValue)?.[0] ?? ''}
            onChange={(value) =>
              column.setFilterValue((old) => [value, old?.[1]])
            }
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
            className="w-24 border shadow rounded"
          />
          <DebouncedInput
            type="number"
            min={column.getFacetedMinMaxValues()?.[0] ?? ''}
            max={column.getFacetedMinMaxValues()?.[1] ?? ''}
            value={(columnFilterValue)?.[1] ?? ''}
            onChange={(value) =>
              column.setFilterValue((old) => [old?.[0], value])
            }
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
            className="w-24 border shadow rounded"
          />
        </div>
        <div className="h-1" />
      </div>
    ) : (
      <>
        <datalist id={`${column.id}list`}>
          {sortedUniqueValues.slice(0, 5000).map((value) => (
            <option aria-label="options" value={value} key={value} />
          ))}
        </datalist>
        <DebouncedInput
          type="text"
          value={(columnFilterValue ?? '')}
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className="w-36 border shadow rounded"
          list={`${column.id}list`}
        />
        <div className="h-1" />
      </>
    )
  }

function DataTableV2() {
  const finalData = React.useMemo(() => mockData, []);
   const finalColumnDef = React.useMemo(() => columns, []);
  const [columnFilters, setColumnFilters] = React.useState(
    [],
  )
  const [globalFilter, setGlobalFilter] = React.useState('')

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

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'main_symbol') {
      if (table.getState().sorting[0]?.id !== 'main_symbol') {
        table.setSorting([{ id: 'main_symbol', desc: false }])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  return (
    <div className="p-2">
      <div>
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(value)}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search all columns..."
        />
      </div>
      <div className="h-2" />
      <table>
        <thead>
          {table && table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
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
        <tbody>
          {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
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
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? e.target.value - 1 : 0
              table.setPageIndex(page)
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(e.target.value)
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
    </div>
  )
}

export default DataTableV2;
