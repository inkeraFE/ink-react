import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Loading = ({ color }) => {
  return (
    <div className="ink-loading">
      <div
        className="loading-item"
        style={{
          borderBottomColor: color,
          borderTopColor: color
        }}
      />
    </div>
  )
}

Loading.propTypes = {
  color: PropTypes.string
}

Loading.defaultProps = {
  color: '#108ee9'
}

export default Loading
