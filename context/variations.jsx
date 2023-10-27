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
        /* API'den gelen veriler main.af_vcf gibi değerlerle geliyor.
        Javascriptte nokta operatörü erişim operatörü olduğu için önyüzde hata veriyor.
        Bu yüzden noktaları alt çizgi ile değiştiriyoruz.
         */
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

    }), [tableData, columns, filterRows, orderingRows, selectedColumn])

    return (
        <VariationContext.Provider value={context}>
            {children}
        </VariationContext.Provider>
    )
}
