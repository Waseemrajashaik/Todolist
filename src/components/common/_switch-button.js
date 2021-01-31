import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SwitchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  box-shadow: ${({ theme }) => theme.s_btn.shadow};
`
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${({ theme }) => theme.s_btn.c_border};
  display: inline-block;
`
const Line = styled.div`
  width: 5px;
  height: 20px;
  background: ${({ theme }) => theme.s_btn.l_background};
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SwitchButton = ({ onSwitch }) => (
  <SwitchButtonContainer onClick={onSwitch}>
    <Circle />
    <Line />
  </SwitchButtonContainer>
)

SwitchButton.propTypes = {
  onSwitch: PropTypes.func.isRequired,
}

export { SwitchButton }
