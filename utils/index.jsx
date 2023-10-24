import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();

export const mockData = [
    {
      main_uploaded_variation: '13_101107503_G/A',
      main_existing_variation: 'rs376152742',
      row: 1,
      main_dp: 108,
      details2_dann_score: 0.9981,
      main_symbol: 'NALCN',
      main_af_vcf: 1,
    },
    {
      main_uploaded_variation: '7_21866494_C/T',
      main_existing_variation: 'rs988794959',
      row: 2,
      main_dp: 195,
      details2_dann_score: 0.9934,
      main_symbol: 'DNAH11',
      main_af_vcf: 0.4479,
    },
    {
      main_uploaded_variation: '16_21736318_G/T',
      main_existing_variation: 'rs200988634',
      row: 3,
      main_dp: 121,
      details2_dann_score: 0.9968,
      main_symbol: 'OTOA',
      main_af_vcf: 0.1405,
    },
    {
      main_uploaded_variation: '12_7190513_GCCTCTGAGGCAGTGAGTGTTCTTGAGGTGGAAAGCCCAGGTGCA/-',
      main_existing_variation: '',
      row: 4,
      main_dp: 119,
      details2_dann_score: null,
      main_symbol: 'PEX5',
      main_af_vcf: 1,
    },
    {
      main_uploaded_variation: '16_1729575_GGAGGTACGCGGGGCGCGGCGGGGT/-',
      main_existing_variation: 'rs771839993',
      row: 5,
      main_dp: 86,
      details2_dann_score: null,
      main_symbol: 'MAPK8IP3',
      main_af_vcf: 0.5143,
    },
    {
      main_uploaded_variation: '12_865143_-/C',
      main_existing_variation: 'rs35706572',
      row: 6,
      main_dp: 97,
      details2_dann_score: null,
      main_symbol: 'WNK1',
      main_af_vcf: 0.4024,
    },
    {
      main_uploaded_variation: '3_10046724_G/-',
      main_existing_variation: 'rs750338758',
      row: 7,
      main_dp: 181,
      details2_dann_score: null,
      main_symbol: 'FANCD2',
      main_af_vcf: 0.3702,
    },
    {
      main_uploaded_variation: '2_240757424_TCCTCC/-',
      main_existing_variation: 'rs10594016',
      row: 8,
      main_dp: 115,
      details2_dann_score: null,
      main_symbol: 'KIF1A',
      main_af_vcf: 0.3559,
    },
    {
      main_uploaded_variation: '2_233713686_C/-',
      main_existing_variation: 'rs369685158',
      row: 9,
      main_dp: 201,
      details2_dann_score: null,
      main_symbol: 'UGT1A5',
      main_af_vcf: 0.4093,
    },
    {
      main_uploaded_variation: '3_195779956_ACAGGAAGAGGGGTGGCGTGACCTGTGGATGCTGAGGAAGGGCTAGTGACAGGAAGAGGCATGGTGTCACCTGTGGATACTGAGGAAGGGATGGTG/-',
      main_existing_variation: 'rs1560304756',
      row: 10,
      main_dp: 81,
      details2_dann_score: null,
      main_symbol: 'MUC4',
      main_af_vcf: 0.4938,
    },
  ]

export const mockOptions = [
    { label: 'Show 5', value: 5 },
    { label: 'Show 10', value: 10 },
    { label: 'Show 30', value: 30 },
    { label: 'Show 40', value: 40 },
    { label: 'Show 50', value: 50 },
]

export const columns = [
  columnHelper.accessor('row', {
    header: 'row',
  }),
  {
    header: 'Uploaded Variation',
    accessorKey: 'main_uploaded_variation',
  },
  {
    header: 'Existing Variation',
    accessorKey: 'main_existing_variation',
  },
  {
    header: 'Dp',
    accessorKey: 'main_dp',
  },
  {
    header: 'DANN Score',
    accessorKey: 'details2_dann_score',
  },
  {
    header: 'Symbol',
    accessorKey: 'main_symbol',
  },
  {
    header: 'AF VCF',
    accessorKey: 'main_af_vcf',
  },
];
