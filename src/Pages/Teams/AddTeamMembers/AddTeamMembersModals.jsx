import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddTeamMembersModal = ({ onClose }) => {
  const initialValues = {
    email: '',
    permission: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    permission: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    // Handle form submission logic here
    console.log(values);

    // Reset the form
    resetForm();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Team Members</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <div className="form-control">
              <label htmlFor="email">Email address (required)</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-control">
              <label htmlFor="permission">Permission (required)</label>
              <Field as="select" id="permission" name="permission">
                
                <option value="admin">Admin</option>
                <option value="analyst">Analyst</option>
              </Field>
              <ErrorMessage name="permission" component="div" className="error-message" />
            </div>
            <div className="modal-buttons">
              <button type="submit">Add team member</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddTeamMembersModal;
