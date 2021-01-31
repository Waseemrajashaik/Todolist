import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ReactComponent as EditIcon } from 'assets/edit.svg'
import { ReactComponent as DeleteIcon } from 'assets/delete.svg'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.item.it_background};
`
const Text = styled.span`
  font-size: 24px;
  font-family: 'Pacifico', sans-serif;
  color: ${({ theme }) => theme.item.it_color};
`
const StyledEdit = styled(EditIcon)`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  cursor: pointer;
`
const StyledDelete = styled(DeleteIcon)`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  cursor: pointer;
`

const Item = ({ item, onEdit, onDelete }) => (
  <Wrapper>
    <Text>{item.text}</Text>
    <div>
      <StyledEdit onClick={() => onEdit(item)} />
      <StyledDelete onClick={() => onDelete(item.id)} />
    </div>
  </Wrapper>
)

Item.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

export { Item }
