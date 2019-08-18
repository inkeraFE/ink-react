import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Switch = ({ checked, onChange }) => {
  const handleClick = e => {
    e.preventDefault()
    onChange(e)
  }
  return (
    <label className="ink-switch" onClick={handleClick}>
      <input
        className="switch-input"
        type="checkbox"
        checked={checked}
        onChange={() => {}}
      />
      <label className="switch-label" />
    </label>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
}

Switch.defaultProps = {
  checked: false,
  onChange: () => {}
}

export default Switch
