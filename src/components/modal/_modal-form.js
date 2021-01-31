import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Formik } from 'formik'

import ModalPortal from 'utils/ModalPortal'
import { Title } from '../common'
import { ReactComponent as CloseIcon } from 'assets/close.svg'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  min-height: 20vh;
  padding: 30px;
  background: ${({ theme }) => theme.ct_background};
  border-radius: 5px;
`
const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`
const ModalForm = ({
  title,
  initialValue,
  Schema,
  onSubmit,
  onClose,
  children,
}) => (
  <ModalPortal showModal>
    <Wrapper>
      <StyledCloseIcon onClick={onClose} />
      <Title>{title}</Title>
      <Formik
        initialValues={initialValue}
        validationSchema={Schema}
        onSubmit={onSubmit}
      >
        {children}
      </Formik>
    </Wrapper>
  </ModalPortal>
)

ModalForm.propTypes = {
  title: PropTypes.string.isRequired,
  initialValue: PropTypes.object.isRequired,
  Schema: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
}

export { ModalForm }
