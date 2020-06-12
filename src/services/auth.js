import { doPublicRequest } from "./baseapi";
import { Redirect } from "react-router-dom";

//const TOKEN = "@Usuarios:token";
const TOKEN = "user";
const ROTA = "login/";

export const signIn = async (usuario) => {
  try {
    //Chamada da function que faz a requisição
    const response = await doPublicRequest(ROTA + "usuario/", "POST", usuario);

    if (response.ok) {
      usuario = await response.json();
      var userLocalStorage = {
        email: usuario.email,
        id: usuario.id,
        idUser: usuario.idUsuario,
      };
      console.log(userLocalStorage);
      //salva o token no localStorage
      //localStorage.setItem(TOKEN, JSON.stringify(usuario));
      localStorage.setItem("user", JSON.stringify(userLocalStorage));
    }
    console.log("requisição feita - status:");
    console.log(response.status);
    return response;
  } catch (erro) {
    console.log(erro);
    return erro;
  }
};

//Usado para verificar se o usuário está logado
export const isSignedIn = () => {
  //Salva em usuario o ~token~ user
  const usuario = localStorage.getItem(TOKEN);

  return JSON.parse(usuario);
};

export const signOut = () => {
  //Remove o ~Token~ (user no momento) do localstorage
  localStorage.removeItem(TOKEN);
};

/*
//Método que retorna o Token do usuário
export const getToken = () => {
  //Salva em usuario o token convertido para objeto
  const usuario = JSON.parse(localStorage.getItem(TOKEN));
  //Retorna o token
  return usuario.token;
};

*/
