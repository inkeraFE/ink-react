import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex'
import Carousel from '../carousel'
import './style.less'

const Tabs = ({ enableGesture, tabs, children }) => {
  const [index, setIndex] = useState(0)
  return (
    <div className="ink-tabs">
      <Flex justifyBetween alignCenter className="tab-navigator">
        {tabs.map((tab, i) => (
          <Flex
            key={i}
            justifyCenter
            alignCenter
            flex={`1 0 ${(1 / tabs.length) * 100}%`}
            className={classNames('nav', {
              active: i === index
            })}
            onClick={() => setIndex(i)}
          >
            {tab}
          </Flex>
        ))}
      </Flex>
      <Carousel disabledGesture={!enableGesture} index={index}>
        {children}
      </Carousel>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.array,
  enableGesture: PropTypes.bool,
  tabs: PropTypes.array
}

Tabs.defaultProps = {
  enableGesture: true
}
export default Tabs
