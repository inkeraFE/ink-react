import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

const Button = ({ type, size, disabled, children, className, ...rest }) => {
  const typeClass = () => {
    return type === 'primary'
      ? 'btn-primary'
      : type === 'danger'
      ? 'btn-danger'
      : type === 'warning'
      ? 'btn-warning'
      : 'btn-default'
  }
  return (
    <button
      {...rest}
      className={classNames('ink-btn', className, typeClass(), {
        'btn-large': size === 'large',
        'is-disabled': disabled
      })}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  type: 'default',
  size: 'small',
  disabled: false
}

export default Button
