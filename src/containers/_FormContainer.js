import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Formik } from 'formik'
import * as Yup from 'yup'

import { Form, Input } from 'components/form'
import { aAddItem } from 'actions'

const formCheckSchema = Yup.object({
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

class FormContainer extends React.Component {
  handleOnSubmit = (values, { resetForm }) => {
    const { actions } = this.props
    actions.aAddItem(values).then(resetForm)
  }
  render() {
    const { handleOnSubmit } = this
    return (
      <Formik
        initialValues={{ text: '' }}
        validationSchema={formCheckSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              id="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
              error={errors['text']}
              name="text"
              type="text"
              labelName="Enter here"
            />
          </Form>
        )}
      </Formik>
    )
  }
}

FormContainer.propTypes = {
  actions: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      aAddItem,
    },
    dispatch,
  ),
})

export default connect(null, mapDispatchToProps)(FormContainer)
