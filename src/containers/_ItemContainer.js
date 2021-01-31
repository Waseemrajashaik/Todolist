import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Item } from 'components'
import { UpdateModal } from './modal'
import { aUpdateItem, aDeleteItem } from 'actions'

const ItemList = styled.div`
  display: grid;
  grid-auto-rows: minmax(max-content, 70px);
  grid-gap: 10px;
  width: 100%;
  height: 70%;
  transition: left 0.5s;
  margin: 5px 0;
  overflow-y: scroll;
`
class ItemContainer extends React.Component {
  state = {
    isUpdate: null,
  }
  handleEdit = data => {
    this.setState({
      isUpdate: data,
    })
  }

  handleUpdate = data => {
    const { actions } = this.props
    const { handleClose } = this
    actions.aUpdateItem(data).then(handleClose)
  }

  handleDelete = id => {
    const { actions } = this.props
    const { handleClose } = this
    actions.aDeleteItem(id).then(handleClose)
  }

  handleClose = () => {
    this.setState({
      isUpdate: null,
    })
  }
  render() {
    const { list } = this.props
    const { isUpdate } = this.state
    const { handleEdit, handleDelete, handleUpdate, handleClose } = this
    return (
      <ItemList>
        {list.map(item => (
          <Item
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
        {isUpdate && (
          <UpdateModal
            initialValue={isUpdate}
            onSubmit={handleUpdate}
            onClose={handleClose}
          />
        )}
      </ItemList>
    )
  }
}

ItemContainer.propTypes = {
  list: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  list: state.list.list,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      aUpdateItem,
      aDeleteItem,
    },
    dispatch,
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
