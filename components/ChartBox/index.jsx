import React from 'react'
import classNames from 'classnames'

import BoxHeader from './BoxHeader'

const ChartBox = ({
    width = 96,
    height = 96,
    children,
    className,
}) => {
    const currentWidth = `w-${width.toString()}`
    const currentHeight = `h-${height.toString()}`

    return (
        <div className={classNames('rounded-md p-8 border border-gray-200 hover:border-blue-600', currentHeight, currentWidth, className)}>
            <BoxHeader
              title="Table Example"
              description="This report includes all variant data"
            />
            {children}
        </div>
    )
}

export default ChartBox
