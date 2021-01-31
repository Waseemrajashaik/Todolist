import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styled from 'styled-components'

import { SwitchButton, Title } from 'components/common'

import { aSwitchTheme } from 'actions'

import FormContainer from './_FormContainer'
import ItemContainer from './_ItemContainer'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.c_background};
`

const Container = styled.div`
  position: relative;
  width: 50%;
  margin: 0 20px;
  min-width: 300px;
  height: 80vh;
  background: ${({ theme }) => theme.ct_background};
  box-shadow: ${({ theme }) => theme.ct_shadow};
  border-radius: 25px;
`

class MainLayout extends React.Component {
  handleThemeSwitch = () => {
    const { actions } = this.props
    actions.aSwitchTheme()
  }
  render() {
    const { handleThemeSwitch } = this
    return (
      <Wrapper>
        <SwitchButton onSwitch={handleThemeSwitch} />
        <Container>
          <Title>To Do List</Title>
          <FormContainer />
          <ItemContainer />
        </Container>
      </Wrapper>
    )
  }
}

MainLayout.propTypes = {
  actions: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      aSwitchTheme,
    },
    dispatch,
  ),
})

export default connect(null, mapDispatchToProps)(MainLayout)
