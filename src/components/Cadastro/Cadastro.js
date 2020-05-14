import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
// import {Formik, Form as FormikForm, Field} from 'formik';


//import { useSelector, useDispatch } from 'react-redux';
 

import "./cadastro.css"
import MyForm from "./Form";
import imgFundoLogo from '../images/pin.png';
//import actionsPassos from '../../actions/passosActions'
const handleSubmit = values => alert(JSON.stringify(values));
const initialValues = {};

export default function Cadastro(props){
  
  
 

  // const passo  = useSelector(state => <state.passo />);

  
  
  return(
    <>
      <div className="container-fluid">
        <header className="bg-header h-header text-white row justify-content-around ">
            <div className="logo mt-3 col-3">
              <img src={imgFundoLogo} alt="logo da empresa"></img>
            </div>
            <div className=" col-6 saudacao align-self-end mb-3 ">
                <h2>A Clean House le deseja boas vindas!</h2>
            </div>
            <div className="col-3">
              <button className="btn btn-sair text-white col-3">Sair</button>
            </div>
        </header>
        <div className=""> 
         
          <MyForm handleSubmit={handleSubmit} initialValues={initialValues}/>
 
        </div>
        <div className="svgm"></div>
      </div>    
    </>
  )

}