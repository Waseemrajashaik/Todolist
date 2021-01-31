import React from 'react'
import PropTypes from 'prop-types'
import { ModalForm } from 'components/modal'
import { Form, Button, Input } from 'components/form'
import * as Yup from 'yup'

const Schema = Yup.object({
  text: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

const UpdateModal = ({ initialValue, onSubmit, onClose }) => (
  <ModalForm
    title="Update"
    initialValue={initialValue}
    onClose={onClose}
    Schema={Schema}
    onSubmit={onSubmit}
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
        <Button type="submit">Submit</Button>
      </Form>
    )}
  </ModalForm>
)

UpdateModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export { UpdateModal }
