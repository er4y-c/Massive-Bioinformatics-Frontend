import React from 'react'

import SelectDropdown from '../SelectDropdown'
import Input from '../Input'
import IconButton from '../IconButton'

const FilterRow = ({ index, filter, updateFilterRow, removeFilterRow }) => {
  const columns = [
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

  const handleChange = (field, value) => {
    const updatedFilter = { ...filter, [field]: value }
    updateFilterRow(index, updatedFilter)
  }

  return (
    <div className="flex gap-x-2 my-8 flex-wrap">
      <SelectDropdown
        id={`column-${index}`}
        options={columns}
        handleChange={(value) => handleChange('column', value)}
        value={filter.column}
      />
      <Input
        name="values"
        value={filter.value}
        handleChange={(event) => handleChange('value', event.target.value)}
        placeholder="Value..."
      />
      <IconButton
        onClick={() => removeFilterRow(index)}
        src="/icons/remove.png"
        width={24}
        height={15}
        alt="Remove Button"
      />
    </div>
  )
}

export default FilterRow
