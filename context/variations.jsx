import { createContext, useState, useMemo } from 'react'

export const VariationContext = createContext({
    columns: null,
    setColumns: () => {},
    filterRows: null,
    setFilterRows: () => {},
    orderingRows: null,
    setOrderingRows: () => {},
})

export const VariationProvider = ({ children }) => {
    const [columns, setColumns] = useState([])
    const [filterRows, setFilterRows] = useState([{ column: '', value: '' }])
    const [orderingRows, setOrderingRows] = useState({ column: '', value: '' })

    const context = useMemo(() => ({
      columns,
      setColumns,
      filterRows,
      setFilterRows,
      orderingRows,
      setOrderingRows,
    }), [columns, filterRows, orderingRows])

    return (
        <VariationContext.Provider value={context}>
            {children}
        </VariationContext.Provider>
    )
}
