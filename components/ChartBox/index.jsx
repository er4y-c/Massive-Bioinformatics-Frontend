import React, { useState } from 'react'
import classNames from 'classnames'

import BoxHeader from './BoxHeader'
import ConfirmModal from '../ConfirmModal'

const ChartBox = ({
    width = 96,
    height = 96,
    children,
}) => {
    const currentWidth = `w-${width.toString()}`
    const currentHeight = `h-${height.toString()}`
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={classNames('rounded-md p-8 border border-gray-200 my-8 hover:border-blue-600', currentHeight, currentWidth)}>
            <BoxHeader
              title="Table Example"
              description="This report includes all variant data"
              openConfirm={() => setIsOpen(true)}
            />
            {children}
            <ConfirmModal
              isOpen={isOpen}
              closeModal={() => setIsOpen(false)}
            />
        </div>
    )
}

export default ChartBox
