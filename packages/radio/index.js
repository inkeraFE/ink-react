import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Radio = ({ checked, disabled, onChange, ...rest }) => {
  const handleClick = e => {
    if (disabled) return
    onChange(e)
  }

  return (
    <label className="ink-radio" onClick={handleClick}>
      <input
        {...rest}
        className="radio-input"
        type="radio"
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
      />
      <label className="radio-label" />
    </label>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

Radio.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {}
}

export default Radio
