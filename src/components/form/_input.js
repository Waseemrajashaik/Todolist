import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: 10px 20px;
  width: 80%;
`

const InputField = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: ${({ theme }) => theme.i_input.i_border_bottom};
  background: ${({ theme }) => theme.i_input.i_background};
  font-family: 'Pacifico', sans-serif;
  color: ${({ theme }) => theme.i_input.i_color};
  &:focus {
    outline: none;
    border-bottom: ${({ theme }) => theme.i_input.i_border_bottom_focus};
  }
`

const Label = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  ${InputField}:focus ~ & {
    top: -18px;
    font-size: 18px;
    color: ${({ theme }) => theme.i_input.i_color};
  }
  ${({ value }) =>
    value
      ? css`
          top: -18px;
          font-size: 18px;
        `
      : null}
`

const InputError = styled.span`
  display: flex;
  justify-content: flex-start;
  color: red;
  margin-top: 8px;
  font-family: 'Noto Sans JP', sans-serif;
`
const Input = ({ name, labelName, id, error, value, ...rest }) => {
  return (
    <Wrapper key={id}>
      <InputField name={name} value={value} {...rest} />
      <Label htmlFor={name} value={value}>
        {labelName}
      </Label>
      {error && <InputError>{error}</InputError>}
    </Wrapper>
  )
}

Input.defaultProps = {
  labelName: null,
  error: null,
  value: '',
}

Input.propTypes = {
  labelName: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
}
export { Input }
