import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.less'

const Carousel = ({
  children,
  disabledGesture,
  time,
  autoPlay,
  dots,
  index,
  loop
}) => {
  const [style, setStyle] = useState({
    transitionDuration: '0ms',
    transform: 'translate3d(0, 0, 0)'
  })

  const [activeIdx, setIndex] = useState(0)
  const [tempMX, setTempMX] = useState(0)
  const [touch, setTouch] = useState({
    touchStartX: 0,
    touchStartY: 0
  })

  const [state, setState] = useState({
    preMoveX: 0,
    canMove: true
  })
  let timer = null
  const carouselRef = useRef(null)

  const changeIndex = isInit => {
    const { offsetWidth } = carouselRef.current
    const preMoveX = -1 * offsetWidth * index
    setStyle({
      transitionDuration: !isInit ? '300ms' : '0ms',
      transform: `translate3d(${preMoveX}px, 0, 0)`
    })
    setState({
      ...state,
      preMoveX
    })
  }
  const handleLoop = moveX => {
    const { offsetWidth } = carouselRef.current
    let preMoveX = state.preMoveX
    const sty = { ...style }
    if (Math.abs(moveX) > offsetWidth * (_carouseLength - 1)) {
      preMoveX = 0
      sty.transform = 'translate3d(0, 0, 0)'
    } else if (moveX > 0) {
      preMoveX = -1 * offsetWidth * (_carouseLength - 1)
    }
    setStyle(sty)
    setState({
      ...state,
      preMoveX,
      style
    })
  }

  const animation = () => {
    const { offsetWidth } = carouselRef.current
    timer = setTimeout(() => {
      let moveX
      let updateTimer
      let preMoveX = state.preMoveX
      const compareMovex = preMoveX - offsetWidth
      if (loop) {
        handleLoop(compareMovex)
        moveX = preMoveX - offsetWidth
      } else if (Math.abs(compareMovex) > offsetWidth * (_carouseLength - 1)) {
        preMoveX = 0
        moveX = 0
      } else {
        moveX = preMoveX - offsetWidth
      }
      setState({
        ...state,
        preMoveX
      })
      if (loop) {
        // 切换延迟一帧
        updateTimer = setTimeout(() => {
          update(moveX, offsetWidth)
          clearTimeout(updateTimer)
        }, 16)
      } else {
        update(moveX, offsetWidth)
      }
    }, time)
  }

  const startAnim = () => {
    if (timer) clearTimeout(timer)
    if (autoPlay) animation()
  }

  const listenAnimEnd = (animWidth, sty) => {
    document.addEventListener(
      'transitionend',
      () => {
        const style = { ...sty }
        style.transitionDuration = '0ms'
        setStyle(style)
        setTempMX(0)
        setState({
          ...state,
          preMoveX: animWidth
        })
        startAnim()
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
    if (timer) clearTimeout(timer)
    if (disabledGesture || !state.canMove) {
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
    let tempCanMove = state.canMove

    const moveY = event.changedTouches[0].pageY - touch.touchStartY
    const absMoveX = Math.abs(tempMoveX)
    const sty = { ...style }

    if (absMoveX < 5 || (absMoveX >= 5 && moveY >= 1.73 * absMoveX)) {
      tempCanMove = false
    } else if (event.cancelable) {
      tempCanMove = true
      event.preventDefault()
    }

    if (!tempCanMove) {
      setTempMX(tempMoveX)
      setState({
        ...state,
        canMove: tempCanMove
      })
      return
    }
    const moveX = tempMoveX + state.preMoveX

    if (
      !loop &&
      (moveX > 0 || Math.abs(moveX) > offsetWidth * (_carouseLength - 1))
    ) {
      setTempMX(0)
      setState({
        ...state,
        canMove: tempCanMove
      })
      return
    }

    if (loop) handleLoop(moveX)

    sty.transform = `translate3d(${moveX}px, 0, 0)`
    setStyle(sty)
    setTempMX(tempMoveX)
    setState({
      ...state,
      canMove: tempCanMove
    })
  }

  const onTouchEnd = event => {
    if (disabledGesture || !state.canMove) return

    const carouselDom = event.currentTarget
    const { offsetWidth } = carouselDom
    let animWidth =
      Math.abs(tempMX) > offsetWidth / 2
        ? tempMX > 0
          ? state.preMoveX + offsetWidth
          : state.preMoveX - offsetWidth
        : state.preMoveX
    update(animWidth, offsetWidth)
  }

  useEffect(() => {
    if (React.Children.count(children) > 0) {
      changeIndex(true)
      startAnim()
    }
  }, [])

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
  autoPlay: PropTypes.bool,
  dots: PropTypes.bool,
  index: PropTypes.number
}

Carousel.defaultProps = {
  disabledGesture: false,
  time: 2000,
  dots: true,
  loop: false,
  autoPlay: false,
  index: 0
}

export default Carousel
