import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormDiv = styled.form`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Form = ({ children, ...rest }) => <FormDiv {...rest}>{children}</FormDiv>

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

export { Form }
