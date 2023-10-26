import React, { useState } from 'react'

import FilterRow from './FilterRow'

const FilterSection = () => {
    const [filterRows, setFilterRows] = useState([{ column: '', value: '' }])

    const addFilterRow = () => {
        setFilterRows([...filterRows, { column: '', value: '' }])
    }

    const updateFilterRow = (index, updatedRow) => {
        const updatedFilterRows = [...filterRows]
        updatedFilterRows[index] = updatedRow
        setFilterRows(updatedFilterRows)
    }

    const removeFilterRow = (index) => {
        const updatedFilterRows = [...filterRows];
        updatedFilterRows.splice(index, 1);
        setFilterRows(updatedFilterRows);
    }

    return (
      <div>
        { filterRows.map((filter, index) => (
          <FilterRow
            key={index}
            index={index}
            filter={filter}
            updateFilterRow={updateFilterRow}
            removeFilterRow={removeFilterRow}
          />
      )) }
        <button
          className="rounded-xl text-sm border border-blue-500 py-2 px-4 text-blue-500"
          onClick={addFilterRow}
        >Add Filter
        </button>
      </div>
    )
}

export default FilterSection