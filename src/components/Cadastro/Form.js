import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {  Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';

const validations = yup.object().shape({
    nome: yup.string()
        .min(3, 'Seu nome deve ter no minimo 3 letras')
        .required('Preencha o campo do nome'),
    email: yup.string()
        .email('Digite um email valido')
        .required('Preencha o campo E-mail'),
    senha: yup.string()
        .min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Preencha o campo de senha'),
    telefone: yup.string(),

    celular: yup.string(),
    
    


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