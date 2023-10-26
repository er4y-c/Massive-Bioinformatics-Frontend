import React, { useContext } from 'react'

import { VariationContext } from '../../context/variations'
import SelectDropdown from '../SelectDropdown'

const ColumnsSection = () => {
    const { setColumns } = useContext(VariationContext)
    const options = [
        { value: 'main.uploaded_variation', label: 'main.uploaded_variation' },
        { value: 'main.existing_variation', label: 'main.existing_variation' },
        { value: 'main.symbol', label: 'main.symbol' },
        { value: 'main.af_vcf', label: 'main.af_vcf' },
        { value: 'main.dp', label: 'main.dp' },
        { value: 'details2.dann_score', label: 'details2.dann_score' },
        { value: 'links.mondo', label: 'links.mondo' },
        { value: 'links.pheno_pubmed', label: 'links.pheno_pubmed' },
        { value: 'details2.provean', label: 'details2.provean' },
      ]
  return (
    <div>
        <SelectDropdown
          isMulti
          id="columns-select"
          options={options}
          handleChange={(value) => setColumns(value)}
          className="w-full lg:w-1/2"
        />
    </div>
  )
}

export default ColumnsSection
