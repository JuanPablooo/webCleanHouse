import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

//Validações
const validations = Yup.object().shape({
  'nome': Yup.string().required('preen')
    // .required("Preencha o campo do nome")
    // .min(3, "Seu nome deve ter no minimo 3 letras"),

  // 'email': Yup.string().required("Preencha o campo E-mail"),

  // 'senha': Yup.string().min(8, "A senha deve ter no minimo 8 caracteres").required("Preencha o campo de senha"),

  // 'telefone': Yup.string(),

  // 'celular': Yup.string(),
});

export function FormGroup(props) {
  const { id, titulo, type, require, placeholder, onChange, value } = props;

  return (
    
    <div className="col-md-5 col-sm-12 ">
      <div className="form-group">
        <label className="input-group" htmlFor={id}>
          {" "}
          {titulo}
          {require && <span className="text-danger">*</span>}
        </label>
        <Field
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={id}
          id={id}
          onChange={onChange}
          value={value}
        />
        <ErrorMessage className="text-danger" name={id} component="span" />
        {
          console.log(id)
        }
      </div>
    </div>
  );
}

const Form = ({ handleSubmit, initialValues }) => {
  const passo = useSelector( ( state ) => <state.passo formGroup={FormGroup} />);

  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validations}
    >
      <FormikForm>{passo}</FormikForm>
     
    </Formik>
    {
        console.log('sdfsdfsdfsdfs')
    }
    
    </>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default Form;
