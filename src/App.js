import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'styles'
import MainLayout from 'containers'

const App = ({ theme_button }) => {
  const value = theme_button ? theme.light : theme.dark
  return (
    <ThemeProvider theme={value}>
      <GlobalStyle />
      <MainLayout />
    </ThemeProvider>
  )
}

App.propTypes = {
  theme_button: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  theme_button: state.list.theme_button,
})

export default connect(mapStateToProps, null)(App)
