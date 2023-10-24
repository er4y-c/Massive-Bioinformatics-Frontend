import React from 'react'
import { mockOptions } from '../../utils'

const ResultGroup = ({ getState, getPageCount, rowsLength, setPageIndex, setPageSize }) =>
  <div className="flex items-center gap-x-4">
    <span className="flex items-center gap-1">
      <div>Showing</div>
      <strong>
        {getState().pagination.pageIndex + 1} to {' '}
        {getPageCount()} {' '}
        of {rowsLength} {' results '}
      </strong>
    </span>
    <span className="flex items-center gap-1">
      | Go to page:
      <input
        type="number"
        defaultValue={getState().pagination.pageIndex + 1}
        onChange={(e) => {
            const page = e.target.value ? e.target.value - 1 : 0
            setPageIndex(page)
        }}
        className="border p-1 rounded w-16"
      />
    </span>
    <select
      value={getState().pagination.pageSize}
      onChange={(e) => {
        setPageSize(e.target.value)
      }}
    >
      {mockOptions.map((pageSize) => (
        <option key={pageSize.value} value={pageSize.value}>
           {pageSize.label}
        </option>
      ))}
    </select>
  </div>

export default ResultGroup
