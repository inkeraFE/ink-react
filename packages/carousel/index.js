import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

// todo
const Carousel = ({ children, disabledGesture, time, dots, index, loop }) => {
  const [style, setStyle] = useState({
    transitionDuration: '0ms',
    transform: 'translate3d(0, 0, 0)'
  })

  const [activeIdx, setIndex] = useState(0)
  const [tempMX, setTempMX] = useState(0)
  const [preMX, setPreMX] = useState(0)
  const [touch, setTouch] = useState({
    touchStartX: 0,
    touchStartY: 0
  })

  let canMove = true
  const carouselRef = useRef(null)

  const isOutSide = (moveX, offsetWidth, _carouseLength) =>
    moveX > 0 || Math.abs(moveX) > offsetWidth * (_carouseLength - 1)

  const go = index => {
    const { offsetWidth } = carouselRef.current
    const preMoveX = -1 * offsetWidth * index
    setStyle({
      transitionDuration: '300ms',
      transform: `translate3d(${preMoveX}px, 0, 0)`
    })
    setIndex(index)
    setPreMX(preMoveX)
  }
  const fixLoop = moveX => {
    const { offsetWidth } = carouselRef.current
    let preMoveX = preMX
    const sty = { ...style }
    if (Math.abs(moveX) > offsetWidth * (_carouseLength - 1)) {
      preMoveX = 0
      sty.transform = 'translate3d(0, 0, 0)'
      setStyle(sty)
    } else if (moveX > 0) {
      preMoveX = -1 * offsetWidth * (_carouseLength - 1)
    }
    setPreMX(preMoveX)
  }

  const listenAnimEnd = (animWidth, sty) => {
    document.addEventListener(
      'transitionend',
      () => {
        const style = { ...sty }
        style.transitionDuration = '0ms'
        setStyle(style)
        setTempMX(0)
        setPreMX(animWidth)
      },
      { capture: false, once: true }
    )
  }

  const update = (moveX, offsetWidth) => {
    let idx = Math.abs(moveX) / offsetWidth
    if (loop && idx >= _carouseLength - 1) {
      idx = 0
    }
    const sty = {
      transitionDuration: `300ms`,
      transform: `translate3d(${moveX}px, 0, 0)`
    }
    setStyle(sty)
    setIndex(idx)
    listenAnimEnd(moveX, sty)
  }

  const onTouchStart = event => {
    if (disabledGesture || !canMove) {
      return
    }
    setTouch({
      touchStartX: event.targetTouches[0].pageX,
      touchStartY: event.targetTouches[0].pageY
    })
  }

  const onTouchMove = event => {
    if (disabledGesture) return
    const carouselDom = event.currentTarget
    const touchEndX = event.changedTouches[0].pageX
    const { offsetWidth } = carouselDom
    let tempMoveX = touchEndX - touch.touchStartX

    const moveY = event.changedTouches[0].pageY - touch.touchStartY
    const absMoveX = Math.abs(tempMoveX)
    const sty = { ...style }

    if (absMoveX < 5 || (absMoveX >= 5 && moveY >= 1.73 * absMoveX)) {
      canMove = false
    } else if (event.cancelable) {
      canMove = true
      event.preventDefault()
    }

    if (!canMove) {
      setTempMX(tempMoveX)
      return
    }
    const moveX = tempMoveX + preMX

    if (!loop && isOutSide(moveX, offsetWidth, _carouseLength)) {
      setTempMX(0)
      return
    }

    if (loop) fixLoop(moveX)

    sty.transform = `translate3d(${moveX}px, 0, 0)`
    setStyle(sty)
    setTempMX(tempMoveX)
  }

  const onTouchEnd = event => {
    if (disabledGesture || !canMove) return

    const carouselDom = event.currentTarget
    const { offsetWidth } = carouselDom
    let animWidth =
      Math.abs(tempMX) > offsetWidth / 2
        ? tempMX > 0
          ? preMX + offsetWidth
          : preMX - offsetWidth
        : preMX
    update(animWidth, offsetWidth)
  }

  useEffect(() => {
    if (React.Children.count(children) >= index) {
      go(index)
    }
  }, [index])

  let dotsArr = []
  const carouselList = React.Children.map(children, (el, index) => {
    const dot = (
      <li
        key={index}
        className={classNames('point', {
          'is-active': activeIdx === index
        })}
      />
    )
    dotsArr.push(dot)
    return (
      <div className="carousel-item" key={index + 1}>
        {el}
      </div>
    )
  })

  let dotsRender = dots ? (
    <ul className="pagination-point-wrapper">{dotsArr}</ul>
  ) : null

  if (loop) {
    carouselList.push(
      React.cloneElement(carouselList[0], {
        key: 0
      })
    )
  }
  const _carouseLength = React.Children.count(children) + Number(loop)
  return (
    <div className="ink-carousel">
      <ul
        className="carousel-wrapper"
        style={style}
        ref={carouselRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {carouselList}
      </ul>
      {dotsRender}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.array,
  disabledGesture: PropTypes.bool,
  time: PropTypes.number,
  loop: PropTypes.bool,
  dots: PropTypes.bool,
  index: PropTypes.number
}

Carousel.defaultProps = {
  disabledGesture: false,
  time: 2000,
  dots: false,
  loop: false,
  index: 0
}

export default Carousel
