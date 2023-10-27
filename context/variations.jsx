import { createContext, useState, useMemo, useEffect } from 'react'

import { replaceDotsWithUnderscores } from '../helpers/columnReplacer'

export const VariationContext = createContext({
    columns: null,
    setColumns: () => {},
    filterRows: null,
    setFilterRows: () => {},
    orderingRows: null,
    setOrderingRows: () => {},
})

export const VariationProvider = ({ children }) => {
    const [tableData, setTableData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [columns, setColumns] = useState([])
    const [filterRows, setFilterRows] = useState({})
    const [orderingRows, setOrderingRows] = useState({})
    const [selectedColumn, setSelectedColumn] = useState('')

    useEffect(() => {
        replaceDotsWithUnderscores(tableData)
    }, [tableData])

    const context = useMemo(() => ({
      tableData,
      setTableData,
      isLoading,
      setIsLoading,
      columns,
      setColumns,
      filterRows,
      setFilterRows,
      orderingRows,
      setOrderingRows,
      selectedColumn,
      setSelectedColumn,

    }), [columns, filterRows, orderingRows, selectedColumn, tableData])

    return (
        <VariationContext.Provider value={context}>
            {children}
        </VariationContext.Provider>
    )
}
