import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.h1`
  color: ${({ theme }) => theme.ct_color};
  font-family: 'Pacifico', cursive;
  text-align: center;
`

const Title = ({ children }) => <Text>{children}</Text>

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

export { Title }
