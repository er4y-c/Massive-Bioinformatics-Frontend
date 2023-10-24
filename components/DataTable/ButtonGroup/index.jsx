import PageButton from './PageButton'

const ButtonGroup = ({
      setPageIndex,
      getCanPreviousPage,
      previousPage,
      nextPage,
      getCanNextPage,
      getPageCount,
    }) => (
    <div className="flex items-center">
        <PageButton
          className="border border-gray-200 rounded p-1"
          onClick={() => setPageIndex()}
          disabled={!getCanPreviousPage()}
        >
            {'<<'}
        </PageButton>
        <PageButton
          className="border rounded p-1"
          onClick={() => previousPage()}
          disabled={!getCanPreviousPage()}
        >
                {'<'}
        </PageButton>
            <PageButton
              className="border rounded p-1"
              onClick={() => nextPage()}
              disabled={!getCanNextPage()}
            >
                {'>'}
            </PageButton>
            <PageButton
              className="border rounded p-1"
              onClick={() => setPageIndex(getPageCount() - 1)}
              disabled={!getCanNextPage()}
            >
                {'>>'}
            </PageButton>
    </div>
    )

export default ButtonGroup
