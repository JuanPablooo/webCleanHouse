import { doPublicRequest } from "./baseapi";

//const TOKEN = "@Usuarios:token";
const ROTA = "login/";

//
export const signIn = async (usuario) => {
  try {
    //Chamada da function que faz a requisição
    const response = await doPublicRequest(ROTA + "usuario/", "POST", usuario);

    if (response.ok) {
      //Resgata o token
      usuario = await response.json();
      //salva o token no localStorage
      //localStorage.setItem(TOKEN, JSON.stringify(usuario));
      localStorage.setItem("@Teste:", JSON.stringify(usuario));
    }
    console.log("foi");
    return response;
  } catch (erro) {
    console.log(erro);
    return erro;
  }
};

//Usado para verificar se o usuário está logado
export const isSignedIn = () => {
  const usuario = localStorage.getItem("@Teste");
  return JSON.parse(usuario);
};

/*
export const signOut = () => {
  //Remove o Token do localstorage
  localStorage.removeItem(TOKEN);
};

//Usado para verificar se o usuário está logado
export const isSignedIn = () => {
  //Salva em usuario o token
  const usuario = localStorage.getItem(TOKEN);
  //Tranforma o usuario em objeto e o retorna
  return JSON.parse(usuario);
};

//Método que retorna o Token do usuário
export const getToken = () => {
  //Salva em usuario o token convertido para objeto
  const usuario = JSON.parse(localStorage.getItem(TOKEN));
  //Retorna o token
  return usuario.token;
};

*/
