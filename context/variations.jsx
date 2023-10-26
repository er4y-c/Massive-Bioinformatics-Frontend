import { createContext, useState, useMemo } from 'react'

export const VariationContext = createContext()

export const VariationProvider = ({ children }) => {
    const [columns, setColumns] = useState([])
    const [filterRows, setFilterRows] = useState([{ column: '', value: '' }])

    const context = useMemo(() => ({
      columns,
      setColumns,
      filterRows,
      setFilterRows,
    }), [columns, filterRows])

    return (
        <VariationContext.Provider value={context}>
            {children}
        </VariationContext.Provider>
    )
}
