import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
`
class ModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.rootSelector = document.body
    let div = document.createElement('div')
    div.setAttribute('id', 'root-modal')
    this.container = div
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container)
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container)
  }

  render() {
    const { showModal, children } = this.props

    const modal = () => (
      <TransitionGroup>
        {showModal && (
          <CSSTransition timeout={700} classNames="fade">
            <ModalWrapper {...this.props}>{children}</ModalWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    )

    return ReactDOM.createPortal(modal(), this.container)
  }
}
ModalPortal.defaultProps = {
  showModal: false,
}
ModalPortal.propTypes = {
  showModal: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default ModalPortal
