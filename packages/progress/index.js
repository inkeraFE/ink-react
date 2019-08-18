import React from 'react'
import PropTypes from 'prop-types'
import './style.less'

const Progress = ({ strokeHeight, strokeColor, percent }) => {
  return (
    <div className="ink-progress">
      <div
        className="progress-default-line"
        style={{
          borderWidth: strokeHeight
        }}
      />
      <div
        className="progress-active-line"
        style={{
          width: `${percent % 100}%`,
          background: strokeColor,
          height: strokeHeight
        }}
      />
    </div>
  )
}

Progress.propTypes = {
  strokeHeight: PropTypes.number,
  strokeColor: PropTypes.string,
  percent: PropTypes.number.isRequired
}

Progress.defaultProps = {
  strokeHeight: 2,
  strokeColor: '#108ee9'
}

export default Progress
