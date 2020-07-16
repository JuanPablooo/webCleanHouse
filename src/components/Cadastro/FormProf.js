import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";

//Validações
const validations = yup.object().shape({
  'nome': yup
    .string()
    .required("Preencha o campo do nome")
    .min(3, "Seu nome deve ter no minimo 3 letras"),

  'email': yup
    .string()
    .email("Digite um email valido")
    .required("Preencha o campo E-mail"),

  'senha': yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("Preencha o campo de senha"),

  'telefone': yup.string(),

  'celular': yup.string(),
});

export function FormGroup(props) {
  const { id, titulo, type, require, placeholder } = props;

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
        />
        <ErrorMessage className="text-danger" name={id} component="span" />
      </div>
    </div>
  );
}

export function FormGroupCheckbox(props) {
  const { id, titulo, type, require, placeholder, checked, onChange } = props;

  return (
    <div className="col-md-5 col-sm-12 ">
      <div className="">
        <Field
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={id}
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <label className="input-group" htmlFor={id}>
          {titulo}
        </label>
        <ErrorMessage className="text-danger" name={id} component="span" />
      </div>
    </div>
  );
}

const FormProf = ({ handleSubmit, initialValues }) => {
  const passo = useSelector((state) => <state.passoProf.passo formGroup={FormGroup} formGroupCheckbox={FormGroupCheckbox} />);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={validations}
    >
      <FormikForm>{passo}</FormikForm>
    </Formik>
  );
};

FormProf.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default FormProf;
