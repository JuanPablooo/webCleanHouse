import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ErrorMessage, Formik, Form as FormikForm, Field} from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    nome: yup.string()
    .min(3, 'seu nome deve ter no minimo 3 letras')
    .required('preencha o campo do nome'),

})

const Form = ({ handleSubmit, initialValues })=> {
    const passo  = useSelector(state => <state.passo />);
    
   return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>       
        <FormikForm >
            { passo  }
            <button type="submit">ox</button>
        </FormikForm>
    </Formik>
    )
}
Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    initialValues: PropTypes.object.isRequired
}
export default Form;