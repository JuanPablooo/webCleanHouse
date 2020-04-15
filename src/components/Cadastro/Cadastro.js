import React, {useState, useEffect}from 'react';


import "./cadastro.css"
import imgFundoLogo from '../images/pin.png';
import Passo1Cliente from './Passo1Cliente';


export default function Cadastro(props){
  // const [todosPassos, setTodosPassos] = useState([
  //   {'id':1, 'passo':Passo1Cliente},
  //   {'id':2, 'passo':Passo2Cliente},
  // ])
  const [passo, setPasso] = useState(Passo1Cliente); 

  useEffect(()=>{
    //aqui vamos fazer animacoes
  });

  function mudaPasso(passodesejado){
    setPasso(passodesejado)
  }

  // function mudaPassoPeloId(id){
  //   todosPassos.map((pass)=>{
  //     pass.id == id ? mudaPasso(pass.passo) : mudaPasso(passo);
  //   })
  // }
  
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
          {passo}
 
        </div>
        <div className="svgm"></div>
      </div>
    
    </>
  )

}