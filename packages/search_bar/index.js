import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Component = ({ value, placeholder, canClear, onChange, onSubmit }) => {
  const [show, setShow] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(e)
  }

  const handleChange = e => {
    onChange(e.target.value)
    if (!e.target.value) setShow(false)
    if (!show) setShow(true)
  }

  const handleFocus = () => {
    if (value && !show) setShow(true)
  }

  const handleClear = () => {
    onChange('')
    setShow(false)
  }

  return (
    <form action="" className="ink-search" onSubmit={handleSubmit}>
      <div className="search-icon">
        <div className="icon-wrapper" />
      </div>
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {canClear && show ? (
        <div className="icon-clear" onClick={handleClear} />
      ) : null}
    </form>
  )
}

Component.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  canClear: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

Component.defaultProps = {
  canClear: true,
  placeholder: '搜索',
  onChange: () => {},
  onSubmit: () => {}
}

export default Component
