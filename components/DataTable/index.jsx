import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';

import SearchFilter from './SearchFilter';

const DataTable = ({ data, columns }) => {
  const {
    options,
    getHeaderGroups,
    getRowModel,
    setPageIndex,
    previousPage,
    getCanPreviousPage,
    nextPage,
    getCanNextPage,
    getPageCount,
  } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  },
  );

  return (
    <>
      <SearchFilter label="Search : " placeholder="10 records.." />
      <table className="">
          <thead className="">
            {getHeaderGroups().map((headerEl) => (
                <tr key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => (
                      <th key={columnEl.id} colSpan={columnEl.colSpan}>
                        {columnEl.isPlaceholder
                          ? null
                          : flexRender(
                                columnEl.column.columnDef.header,
                                columnEl.getContext(),
                              )}
                      </th>
                      ))}
                </tr>
                ))}
          </thead>
            <tbody>
              {getRowModel().rows.map((rowEl) => (
                  <tr key={rowEl.id}>
                    {rowEl.getVisibleCells().map((cellEl) => (
                        <td key={cellEl.id}>
                          {flexRender(
                            cellEl.column.columnDef.cell,
                            cellEl.getContext(),
                          )}
                        </td>
                      ))}
                  </tr>
                ))}
            </tbody>
      </table>

          <div className="bg-white flex gap-x-4">
            <button
              onClick={() => setPageIndex(0)}
              disabled={!getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!getCanPreviousPage()}
            >
              Previous
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!getCanNextPage()}
            >
              Next
            </button>
            <button
              onClick={() =>
                setPageIndex(getPageCount() - 1)
              }
              disabled={!getCanNextPage()}
            >
              {'>>'}
            </button>
          </div>
          <div>
              Showing {options.state.pagination.pageIndex + 1} of
              { getPageCount()}
          </div>
    </>
      );
    };

export default DataTable;
