import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.less'

const Header = ({ left, center, right, className }) => {
  return (
    <header className={classNames('ink-header', className)}>
      {left || <div />}
      {center || <div />}
      {right || <div />}
    </header>
  )
}

Header.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
  className: PropTypes.string
}

export default Header
