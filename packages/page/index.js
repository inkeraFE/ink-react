import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Flex from '../flex/index'

import './style.less'

const Page = ({
  className,
  pageClassName,
  white,
  header,
  tabbar,
  bottom,
  children,
  ...rest
}) => {
  return (
    <Flex
      {...rest}
      column
      className={classNames(
        {
          page: true,
          'page-white': white
        },
        className
      )}
    >
      {header && (
        <Flex column none>
          {header}
        </Flex>
      )}
      <Flex
        flex
        column
        className={classNames('page-content block', pageClassName)}
      >
        {children}
      </Flex>
      {bottom}
      {tabbar && (
        <Flex column none className="page-tabbar">
          {tabbar}
        </Flex>
      )}
    </Flex>
  )
}

Page.displayName = 'Page'

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pageClassName: PropTypes.string,
  white: PropTypes.bool,
  header: PropTypes.node,
  tabbar: PropTypes.node,
  bottom: PropTypes.node
}

export default Page
