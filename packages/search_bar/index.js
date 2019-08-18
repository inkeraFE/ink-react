import React from 'react'
import PropTypes from 'prop-types'
import './style.less'
// // rollup bug ?
// const Component = ({ value, placeholder, canClear, onChange, onSubmit }) => {
//   const [showClear, setAction] = React.useState(false)
//   const handleSubmit = e => {
//     e.preventDefault()
//     onSubmit(e)
//   }

//   const handleChange = e => {
//     onChange(e.target.value)
//     if (!e.target.value) setAction(false)
//     if (!showClear) setAction(true)
//   }

//   const handleFocus = () => {
//     if (value && !showClear) setAction(true)
//   }

//   const handleClear = () => {
//     onChange('')
//     setAction(false)
//   }

//   return (
//     <form action="" className="ink-search" onSubmit={handleSubmit}>
//       <div className="search-icon">
//         <div className="icon-wrapper" />
//       </div>
//       <input
//         className="search-input"
//         type="search"
//         placeholder={placeholder}
//         value={value}
//         onChange={handleChange}
//         onFocus={handleFocus}
//       />
//       {canClear && showClear ? (
//         <div className="icon-clear" onClick={handleClear} />
//       ) : null}
//     </form>
//   )
// }

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showClear: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(e)
  }

  handleChange(e) {
    const { showClear } = this.state
    this.props.onChange(e.target.value)
    if (!e.target.value) this.setState({ showClear: false })
    if (!showClear) this.setState({ showClear: true })
  }

  handleFocus() {
    const { showClear } = this.state
    if (this.props.value && !showClear) this.setState({ showClear: true })
  }

  handleClear() {
    this.props.onChange('')
    this.setState({ showClear: false })
  }
  render() {
    const { showClear } = this.state
    const { placeholder, value, canClear } = this.props
    return (
      <form
        action=""
        className="ink-search"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <div className="search-icon">
          <div className="icon-wrapper" />
        </div>
        <input
          className="search-input"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange.bind(this)}
          onFocus={this.handleFocus.bind(this)}
        />
        {canClear && showClear ? (
          <div className="icon-clear" onClick={this.handleClear.bind(this)} />
        ) : null}
      </form>
    )
  }
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
