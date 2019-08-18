import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const SearchBar = ({ value, placeholder, canClear, onChange, onSubmit }) => {
  const [showClear, setAction] = React.useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(e)
  }

  const handleChange = e => {
    onChange(e.target.value)
    if (!e.target.value) setAction(false)
    if (!showClear) setAction(true)
  }

  const handleFocus = () => {
    if (value && !showClear) setAction(true)
  }

  const handleClear = () => {
    onChange('')
    setAction(false)
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
      {showClear ? <div className="icon-clear" onClick={handleClear} /> : null}
    </form>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  canClear: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

SearchBar.defaultProps = {
  canClear: true,
  placeholder: '搜索',
  onChange: () => {},
  onSubmit: () => {}
}

export default SearchBar
